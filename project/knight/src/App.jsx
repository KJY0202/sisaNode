import { useState } from "react";
import { ArrowDown, ArrowUpRight, Sparkles, Heart, MoonStar } from "lucide-react";
import { members } from "./data/members.js";
import Header from "./components/Header.jsx";
import MemberGrid from "./components/MemberGrid.jsx";
import MemberProfile from "./components/MemberProfile.jsx";

export default function App() {
  const [selectedId, setSelectedId] = useState("pareo");
  const [activeSection, setActiveSection] = useState("home");
  const selectedMember = members.find((member) => member.id === selectedId) ?? members[0];

  const navigateTo = (section) => {
    setActiveSection(section);
    if (section === "members") {
      document.getElementById("members")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (section === "about") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const selectMember = (id) => {
    setSelectedId(id);
    setActiveSection("members");
    window.setTimeout(() => {
      document.getElementById("profile")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const nextMember = () => {
    const index = members.findIndex((member) => member.id === selectedId);
    setSelectedId(members[(index + 1) % members.length].id);
  };

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header onNavigate={navigateTo} activeSection={activeSection} />

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE MAGIC AFTER DARK</p>
            <h1>Four colors,<br /><em>one dream.</em></h1>
            <p className="hero-description">
              4つの色が重なる場所。<br />
              Knight Melloのきらめきを、ここに。
            </p>
            <button className="hero-cta" onClick={() => navigateTo("members")}>
              MEET THE MEMBERS <ArrowDown size={15} />
            </button>
            <div className="hero-note"><Sparkles size={14} /> A fan-made tribute site</div>
          </div>

          <div className="hero-members" id="members">
            <div className="section-heading">
              <div>
                <span className="section-kicker">THE CAST</span>
                <h2>Meet the <i>stars.</i></h2>
              </div>
              <span className="member-count">04 MEMBERS <span>✦</span></span>
            </div>
            <MemberGrid members={members} selectedId={selectedId} onSelect={selectMember} />
            <div className="under-grid-note"><span>✧</span> Tap a card to discover each member <span>✧</span></div>
          </div>
          <span className="hero-orbit orbit-a">✦</span>
          <span className="hero-orbit orbit-b">✧</span>
          <span className="hero-orbit orbit-c">♡</span>
        </section>

        <MemberProfile
          member={selectedMember}
          onNext={nextMember}
          onClose={() => navigateTo("members")}
        />

        <section className="about-strip" id="about">
          <div className="about-icon"><MoonStar size={26} /></div>
          <div className="about-copy">
            <span className="section-kicker">A NOTE FROM THE FAN</span>
            <h2>Made with love, <i>for the stars.</i></h2>
            <p>Knight Mello를 응원하는 마음으로 만든 비공식 팬메이드 소개 사이트입니다.<br className="desktop-break" /> 멤버의 공식 정보와 링크는 확인된 내용으로 업데이트해 주세요.</p>
          </div>
          <div className="about-decoration"><Heart size={23} /><span>♡</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <button className="footer-brand" onClick={() => navigateTo("home")}>Knight Mello <span>✦</span></button>
        <span className="footer-rule" />
        <p>4 COLORS, 1 DREAM</p>
        <span className="footer-rule" />
        <span className="footer-note">UNOFFICIAL FAN-MADE WEBSITE</span>
        <button className="back-top" onClick={() => navigateTo("home")} aria-label="맨 위로"><ArrowUpRight size={16} /></button>
      </footer>
    </div>
  );
}