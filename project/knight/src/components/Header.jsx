import { MoonStar, Heart, Menu } from "lucide-react";

export default function Header({ onNavigate, activeSection }) {
  const links = [
    { id: "home", label: "HOME" },
    { id: "members", label: "MEMBERS" },
    { id: "about", label: "ABOUT" },
  ];

  return (
    <header className="site-header">
      <button className="brand" onClick={() => onNavigate("home")} aria-label="Knight Mello 홈으로">
        <span className="brand-mark"><MoonStar size={18} /></span>
        <span className="brand-name">Knight Mello<span className="brand-star">✦</span></span>
        <span className="brand-subtitle">— 4 colors, 1 dream —</span>
      </button>
      <nav className="desktop-nav" aria-label="주요 메뉴">
        {links.map((link) => (
          <button
            key={link.id}
            className={activeSection === link.id ? "nav-link active" : "nav-link"}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
      <button className="header-heart" onClick={() => onNavigate("members")} aria-label="멤버 보기">
        <Heart size={19} />
      </button>
      <button className="mobile-menu" onClick={() => onNavigate("members")} aria-label="멤버로 이동">
        <Menu size={22} />
      </button>
    </header>
  );
}