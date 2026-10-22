import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { MENU, PROMO_END, won } from "../data/menu";
import useCountdown from "../hooks/useCountdown";
import MenuCard from "../components/MenuCard";
import { stagger, fadeUp } from "../variants";

export default function Home() {
  const remaining = useCountdown(PROMO_END);
  const reduceMotion = useReducedMotion();
  const seasonal = MENU.filter((item) => item.season).slice(0, 4);

  return (
    <div className="page home-page">
      <section className="hero">
        <motion.div className="hero-copy" initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduceMotion ? 0 : 0.55 }}>
          <span className="eyebrow"><Sparkles size={14} /> AUTUMN SPECIAL</span>
          <h1>지금, 가장 맛있는<br /><em>가을의 순간</em></h1>
          <p>한정 메뉴와 특별한 혜택을 만나보세요.</p>
          <div className="countdown-panel">
            <span className="countdown-label">프로모션 마감까지</span>
            <div className="countdown-values">
              {[["일", remaining.days], ["시간", remaining.hours], ["분", remaining.minutes], ["초", remaining.seconds]].map(([label, value]) => (
                <div className="countdown-unit" key={label}><strong>{String(value).padStart(2, "0")}</strong><small>{label}</small></div>
              ))}
            </div>
          </div>
          <Link to="/menu?cat=all" className="button button-dark">메뉴 둘러보기 <ArrowRight size={16} /></Link>
        </motion.div>
        <motion.div className="hero-art" initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0 : 0.65 }}>
          <div className="hero-sun" />
          <span className="hero-leaf leaf-one">🍂</span><span className="hero-leaf leaf-two">🍁</span>
          <div className="hero-cup" aria-label="따뜻한 가을 라떼" role="img">☕<span>🍁</span></div>
          <div className="hero-beans">🌰　✦　🍂</div>
        </motion.div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div><span className="eyebrow">LIMITED MENU</span><h2>시즌 한정 메뉴</h2></div>
          <Link to="/menu?cat=all" className="text-link">전체 보기 <ArrowRight size={15} /></Link>
        </div>
        <motion.div className="menu-grid seasonal-grid" variants={stagger} initial="hidden" animate="visible">
          {seasonal.map((item, index) => <MenuCard item={item} index={index} key={item.id} />)}
        </motion.div>
      </section>
      <section className="event-banner">
        <div><span className="eyebrow">A LITTLE GIFT FOR YOU</span><h2>온도의 특별한 쿠폰</h2><p>간단한 이벤트에 참여하고 작은 선물을 받아보세요.</p></div>
        <Link to="/event" className="button button-pink">쿠폰 받기 <ArrowRight size={16} /></Link>
      </section>
    </div>
  );
}
