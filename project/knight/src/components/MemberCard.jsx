import { useState } from "react";
import { Crown, Sparkles } from "lucide-react";

export default function MemberCard({ member, selected, onClick, index }) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasImage = member.image && !imageFailed;

  return (
    <button
      className={`member-card ${selected ? "is-selected" : ""}`}
      style={{
        "--member-color": member.color,
        "--member-soft": member.colorSoft,
        "--member-deep": member.colorDeep,
        "--card-index": index,
      }}
      onClick={onClick}
      aria-pressed={selected}
      aria-label={`${member.name} 프로필 보기`}
    >
      <span className="card-topline">
        <span className="member-color-dot" />
        <span className="card-number">0{index + 1}</span>
        <Sparkles size={16} className="card-sparkle" />
      </span>
      <span className={`card-portrait ${hasImage ? "has-image" : "no-image"}`}>
        {hasImage ? (
          <img src={member.image} alt={`${member.name} 사진`} onError={() => setImageFailed(true)} />
        ) : (
          <span className="portrait-placeholder">
            <Crown size={30} strokeWidth={1.2} />
            <span>{member.nameEn}</span>
            <small>PHOTO COMING SOON</small>
          </span>
        )}
        <span className="portrait-glow" />
      </span>
      <span className="card-caption">
        <span className="member-name-script">{member.name}</span>
        <span className="member-name-en">{member.nameEn}</span>
        <span className="member-color-label">{member.colorName}</span>
      </span>
      <span className="card-bottom-star">✧</span>
    </button>
  );
}