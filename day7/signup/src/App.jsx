import { useState } from "react";
import Field from "./molecules/Field";
import AllChecker from "./molecules/AllChecker";
import Checker from "./molecules/Checker";
import Button from "./atoms/Button";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [checkList, setCheckList] = useState([false, false, false]);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isAble =
    emailIsValid &&
    password.length >= 8 &&
    password === passwordCheck &&
    checkList[0] &&
    checkList[1];

  return (
    <main className="page">
      <section className="signup-card">
        <header className="signup-header">
          <span className="signup-eyebrow">WELCOME</span>
          <h1>회원가입</h1>
          <p>계정 정보와 약관 동의를 입력해 주세요.</p>
        </header>
        <form
          className="signup-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <Field
            id="email"
            title="이메일"
            warnTitle="올바른 이메일 주소를 입력해 주세요."
            type="email"
            value={email}
            cond={email.length > 0 && !emailIsValid}
            func={(event) => setEmail(event.target.value)}
            required
          />
          <Field
            id="password"
            title="비밀번호"
            warnTitle="비밀번호는 8글자 이상이어야 해요."
            type="password"
            value={password}
            cond={password.length > 0 && password.length < 8}
            func={(event) => setPassword(event.target.value)}
            required
          />
          <Field
            id="password-check"
            title="비밀번호 확인"
            warnTitle="비밀번호가 일치하지 않아요."
            type="password"
            value={passwordCheck}
            cond={passwordCheck.length > 0 && password !== passwordCheck}
            func={(event) => setPasswordCheck(event.target.value)}
            required
          />

          <div className="agreement-list">
            <AllChecker
              func={() =>
                setCheckList((prev) =>
                  prev.every(Boolean)
                    ? [false, false, false]
                    : [true, true, true],
                )
              }
              isChecked={checkList.every(Boolean)}
            />
            <Checker
              checked={checkList[0]}
              func={(event) =>
                setCheckList((prev) =>
                  prev.map((value, index) =>
                    index === 0 ? event.target.checked : value,
                  ),
                )
              }
              isNecessary
              text="이용 약관 동의"
            />
            <Checker
              checked={checkList[1]}
              func={(event) =>
                setCheckList((prev) =>
                  prev.map((value, index) =>
                    index === 1 ? event.target.checked : value,
                  ),
                )
              }
              isNecessary
              text="개인 정보 수집 이용 동의"
            />
            <Checker
              checked={checkList[2]}
              func={(event) =>
                setCheckList((prev) =>
                  prev.map((value, index) =>
                    index === 2 ? event.target.checked : value,
                  ),
                )
              }
              isNecessary={false}
              text="마케팅 수신 동의"
            />
          </div>
          <Button isAble={isAble} />
        </form>
      </section>
    </main>
  );
}

export default App;
