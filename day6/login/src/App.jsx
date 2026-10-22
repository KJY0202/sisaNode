import { useState } from "react";

const App = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const [agreements, setAgreements] = useState({
    terms: false,
    privacy: false,
    marketing: false,
  });

  const allChecked =
    agreements.terms && agreements.privacy && agreements.marketing;

  const emailError = account.email !== "" && !account.email.includes("@");
  const passwordError = account.password !== "" && account.password.length < 8;
  const passCheckError =
    account.password !== "" && account.password !== account.passwordCheck;

  return (
    <section className="mx-auto my-10 flex w-full max-w-md flex-col gap-5 rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900">회원가입</h2>
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">이메일</p>
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          type="text"
          value={account.email}
          onChange={(e) => {
            setAccount((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />

        {emailError && (
          <p className="text-sm text-red-600">이메일에 @를 포함해 주세요.</p>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">비밀번호</p>
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          type="text"
          value={account.password}
          onChange={(e) => {
            setAccount((prev) => ({
              ...prev,
              password: e.target.value,
            }));
          }}
        />
        {passwordError && (
          <p className="text-sm text-red-600">8자 이상으로해주세요</p>
        )}
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium text-gray-700">비밀번호 확인</p>
        <input
          className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          type="text"
          value={account.passwordCheck}
          onChange={(e) => {
            setAccount((prev) => ({
              ...prev,
              passwordCheck: e.target.value,
            }));
          }}
        />
        {passCheckError && (
          <p className="text-sm text-red-600">비밀번호가 일치하지 않습니다</p>
        )}
      </div>
      <div className="space-y-3 border-t border-gray-200 pt-4">
        <div className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="allChecked"
            id=""
            onChange={() => {
              setAgreements({
                terms: true,
                privacy: true,
                marketing: true,
              });
            }}
          />
          <p className="text-sm font-semibold text-gray-800">전체동의</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" name="terms" id="" />
          <p className="text-sm text-gray-600">이용약관 동의</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" name="privacy" id="" />
          <p className="text-sm text-gray-600">개인정보 수집 · 이용 동의</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <input type="checkbox" name="marketing" id="" />
          <p className="text-sm text-gray-600">마케팅 정보 수신 동의</p>
        </div>
      </div>
      <button className="rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
        가입하기
      </button>
    </section>
  );
};

export default App;
