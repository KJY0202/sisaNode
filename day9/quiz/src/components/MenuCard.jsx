import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import LikeButton from "./LikeButton";
import { won } from "../data/menu";
import { fadeUp } from "../variants";

export default function MenuCard({ item, index = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.article
      className="menu-card"
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
      transition={{ duration: reduceMotion ? 0 : 0.28, delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.2) }}
      layout={!reduceMotion}
    >
      <div className="menu-card-art" style={{ background: item.color }}>
        <Link to={`/menu/${item.id}`} className="art-link" aria-label={`${item.name} 상세 보기`}>
          <span className="menu-emoji" aria-hidden="true">{item.emoji}</span>
        </Link>
        <LikeButton id={item.id} />
        {item.season && <span className="season-badge">SEASON</span>}
      </div>
      <Link to={`/menu/${item.id}`} className="menu-card-info">
        <h3>{item.name}</h3>
        <p>{won(item.price)}</p>
      </Link>
    </motion.article>
  );
}
