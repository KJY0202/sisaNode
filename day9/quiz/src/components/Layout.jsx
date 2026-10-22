import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Heart, Instagram, Menu as MenuIcon } from "lucide-react";
import useCafeStore from "../store/useCafeStore";

const navClass = ({ isActive }) => `nav-link${isActive ? " active" : ""}`;

export default function Layout() {
  const favorites = useCafeStore((state) => state.favorites);
  const coupon = useCafeStore((state) => state.coupon);
  const location = useLocation();
  const isMenuSection = location.pathname === "/menu" || location.pathname.startsWith("/menu/");

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink to="/" className="brand" aria-label="ONDO 홈">ONDO<span>☼</span></NavLink>
        <nav className="desktop-nav" aria-label="주요 메뉴">
          <NavLink to="/" end className={navClass}>홈</NavLink>
          <NavLink to="/menu" className={() => `nav-link${isMenuSection ? " active" : ""}`}>메뉴</NavLink>
          <NavLink to="/event" className={navClass}>이벤트{coupon && <i className="event-dot" aria-label="쿠폰 발급 완료" />}</NavLink>
        </nav>
        <div className="header-actions">
          <NavLink to="/menu?cat=all#favorites" className="favorite-count" aria-label={`찜 ${favorites.length}개`}>
            <Heart size={18} /> <span>{favorites.length}</span>
          </NavLink>
          <NavLink className="mobile-menu" to="/menu" aria-label="메뉴 보기"><MenuIcon size={21} /></NavLink>
        </div>
      </header>
      <main className="main-content"><Outlet /></main>
      <footer className="site-footer">
        <NavLink to="/" className="footer-brand">ONDO</NavLink>
        <span>좋은 커피, 더 특별한 일상</span>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="인스타그램"><Instagram size={17} /></a>
      </footer>
    </div>
  );
}
