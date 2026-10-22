import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES, MENU } from "../data/menu";
import MenuCard from "../components/MenuCard";
import useCafeStore from "../store/useCafeStore";

export default function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();
  const favorites = useCafeStore((state) => state.favorites);
  const active = CATEGORIES.some((item) => item.id === searchParams.get("cat")) ? searchParams.get("cat") : "all";
  const reduceMotion = useReducedMotion();
  const filtered = active === "all" ? MENU : MENU.filter((item) => item.category === active);
  const favoriteItems = MENU.filter((item) => favorites.includes(item.id));

  const selectCategory = (category) => {
    const next = new URLSearchParams(searchParams);
    next.set("cat", category);
    setSearchParams(next, { replace: false });
  };

  return (
    <section className="page menu-page">
      <div className="page-intro">
        <span className="eyebrow">OUR MENU</span>
        <h1>오늘의 작은 행복</h1>
        <p>취향에 맞는 한 잔과 디저트를 골라보세요.</p>
      </div>
      <div className="category-tabs" role="tablist" aria-label="메뉴 카테고리">
        {CATEGORIES.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={active === category.id}
            className={`category-tab ${active === category.id ? "selected" : ""}`}
            onClick={() => selectCategory(category.id)}
          >
            {category.label}
            {active === category.id && !reduceMotion && <motion.span className="tab-underline" layoutId="category-underline" transition={{ type: "spring", stiffness: 450, damping: 36 }} />}
            {active === category.id && reduceMotion && <span className="tab-underline reduced" />}
          </button>
        ))}
      </div>
      <p className="result-count">{filtered.length}개의 메뉴</p>
      <motion.div className="menu-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((item, index) => <MenuCard key={item.id} item={item} index={index} />)}
        </AnimatePresence>
      </motion.div>
      <section className="section-block" id="favorites">
        <div className="section-heading">
          <div><span className="eyebrow">YOUR FAVORITES</span><h2>찜한 메뉴</h2></div>
        </div>
        {favoriteItems.length > 0 ? (
          <div className="menu-grid">
            {favoriteItems.map((item, index) => <MenuCard key={item.id} item={item} index={index} />)}
          </div>
        ) : (
          <p className="result-count">아직 찜한 메뉴가 없어요. 하트 버튼을 눌러 메뉴를 저장해 보세요.</p>
        )}
      </section>
    </section>
  );
}
