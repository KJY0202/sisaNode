import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Check, Copy, Gift, RotateCcw, Sparkles } from "lucide-react";
import useCafeStore from "../store/useCafeStore";

export default function Event() {
  const coupon = useCafeStore((state) => state.coupon);
  const saveCoupon = useCafeStore((state) => state.saveCoupon);
  const clearCoupon = useCafeStore((state) => state.clearCoupon);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  const nameValid = name.trim().length >= 2;
  const phoneValid = /^010-\d{4}-\d{4}$/.test(phone);
  const valid = nameValid && phoneValid && agreed;
  const showNameError = name.length > 0 && !nameValid;
  const showPhoneError = phone.length > 0 && !phoneValid;

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length < 4) return digits;
    if (digits.length < 8) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
    return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
  };

  const submit = (event) => {
    event.preventDefault();
    if (!valid) return;
    const digits = phone.replace(/\D/g, "");
    saveCoupon({ code: `ONDO-${digits.slice(-4)}`, name: name.trim() });
    setSubmitted(true);
  };

  const restart = () => {
    clearCoupon();
    setSubmitted(false);
    setName("");
    setPhone("");
    setAgreed(false);
    setCopied(false);
  };

  if (coupon) {
    return (
      <section className="page event-page">
        <div className="page-intro centered">
          <span className="eyebrow">YOUR LITTLE GIFT</span>
          <h1>쿠폰이 발급되었어요!</h1>
          <p>아래 쿠폰을 확인하고, 맛있는 하루를 즐겨보세요.</p>
        </div>
        <motion.div className="coupon-card" initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.35 }}>
          <div className="coupon-top"><span>ONDO COFFEE</span><Gift size={21} /></div>
          <div className="coupon-middle"><span>YOUR COUPON</span><strong>{coupon.code}</strong><p>{coupon.name}님을 위한 작은 선물</p></div>
          <div className="coupon-bottom"><span>온도와 함께 따뜻한 하루</span><Sparkles size={16} /></div>
        </motion.div>
        <div className="coupon-actions">
          <button className="button button-pink" type="button" onClick={() => { if (navigator.clipboard?.writeText) navigator.clipboard.writeText(coupon.code).then(() => setCopied(true)).catch(() => setCopied(false)); }}>
            {copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "복사했어요" : "쿠폰 코드 복사"}
          </button>
          <button className="button button-outline" type="button" onClick={restart}><RotateCcw size={16} /> 다시 받기</button>
        </div>
        <p className="fine-print">쿠폰 코드를 저장해 두세요. 실제 매장 사용 및 발급 검증은 별도 서버 연동이 필요합니다.</p>
      </section>
    );
  }

  return (
    <section className="page event-page">
      <div className="page-intro">
        <span className="eyebrow">SPECIAL EVENT</span>
        <h1>온도의 작은 선물</h1>
        <p>정보를 입력하고 필수 항목에 동의하면 쿠폰을 받을 수 있어요.</p>
      </div>
      <form className="event-form" onSubmit={submit} noValidate>
        <label className="field-label" htmlFor="event-name">이름 <span>*</span></label>
        <input id="event-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="두 글자 이상 입력해 주세요." aria-invalid={showNameError} aria-describedby="name-error" />
        <p id="name-error" className={`field-message ${showNameError ? "visible" : ""}`}>{showNameError ? "이름은 두 글자 이상 입력해 주세요." : " "}</p>

        <label className="field-label" htmlFor="event-phone">휴대폰 번호 <span>*</span></label>
        <input id="event-phone" inputMode="numeric" autoComplete="tel" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} placeholder="010-0000-0000" aria-invalid={showPhoneError} aria-describedby="phone-error" />
        <p id="phone-error" className={`field-message ${showPhoneError ? "visible" : ""}`}>{showPhoneError ? "010-0000-0000 형식으로 입력해 주세요." : " "}</p>

        <div className="agreement-box">
          <label className="checkbox-row"><input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} /><span>개인정보 수집 및 이용 동의 (필수)</span></label>
          <p className={`field-message ${!agreed && (nameValid || phoneValid) ? "visible" : ""}`}>{!agreed && (nameValid || phoneValid) ? "쿠폰 발급을 위해 필수 동의가 필요해요." : " "}</p>
        </div>
        <button className="button button-pink submit-button" type="submit" disabled={!valid}>쿠폰 받기 <Gift size={17} /></button>
        <p className="fine-print">입력한 정보는 이 데모 화면에서 서버로 전송되지 않습니다.</p>
      </form>
    </section>
  );
}
