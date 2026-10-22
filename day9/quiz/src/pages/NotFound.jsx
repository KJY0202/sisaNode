import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="page empty-state not-found">
      <span className="empty-illustration">☕</span>
      <span className="eyebrow">404 · PAGE NOT FOUND</span>
      <h1>페이지를 찾을 수 없어요</h1>
      <p>주소가 잘못되었거나 페이지가 이동했을 수 있어요.</p>
      <Link to="/" className="button button-outline">홈으로 가기 <ArrowRight size={16} /></Link>
    </section>
  );
}
