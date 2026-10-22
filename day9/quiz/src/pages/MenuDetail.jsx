import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { MENU, won } from "../data/menu";
import LikeButton from "../components/LikeButton";

export default function MenuDetail() {
  const { id } = useParams();
  const item = MENU.find((menuItem) => menuItem.id === Number(id));
  const reduceMotion = useReducedMotion();

  if (!item) {
    return (
      <section className="page empty-state">
        <span className="empty-illustration">☕</span>
        <h1>없는 메뉴예요</h1>
        <p>요청하신 메뉴를 찾을 수 없어요.</p>
        <Link to="/menu" className="button button-outline">메뉴로 돌아가기 <ArrowRight size={16} /></Link>
      </section>
    );
  }

  return (
    <section className="page detail-page">
      <Link to="/menu" className="back-link"><ArrowLeft size={16} /> 메뉴로</Link>
      <div className="detail-layout">
        <motion.div className="detail-art" style={{ background: item.color }} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.3 }}>
          <span aria-hidden="true">{item.emoji}</span>
          <LikeButton id={item.id} className="detail-like" />
        </motion.div>
        <div className="detail-copy">
          {item.season && <span className="season-badge detail-badge">SEASON LIMITED</span>}
          <h1>{item.name}</h1>
          <p className="detail-price">{won(item.price)}</p>
          <div className="detail-divider" />
          <p className="detail-description">{item.desc}</p>
          <div className="detail-tags"><span>ONDO PICK</span><span>{item.category === "dessert" ? "DESSERT" : item.category === "coffee" ? "COFFEE" : "NON-COFFEE"}</span></div>
          <Link to="/menu" className="button button-pink detail-menu-button">메뉴로 돌아가기 <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
