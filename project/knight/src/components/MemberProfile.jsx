import { useState } from "react";
import {
  ArrowUpRight, CalendarDays, Ruler, Droplets, Star, Heart,
  Camera, CirclePlay, ExternalLink, Image as ImageIcon, Sparkles
} from "lucide-react";

function ProfileImage({ src, name, className = "" }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) {
    return (
      <div className={`profile-image-fallback ${className}`}>
        <Sparkles size={30} strokeWidth={1.2} />
        <span>{name}</span>
        <small>ADD A PHOTO IN members.js</small>
      </div>
    );
  }
  return <img className={className} src={src} alt={`${name} 프로필`} onError={() => setFailed(true)} />;
}

function InfoItem({ icon: Icon, label, value }) {
  if (!value) return null;
  return (
    <div className="info-item">
      <Icon size={15} />
      <span className="info-label">{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SocialIcon({ label }) {
  if (label.toLowerCase().includes("instagram")) return <Camera size={16} />;
  if (label.toLowerCase().includes("youtube")) return <CirclePlay size={16} />;
  return <ExternalLink size={16} />;
}

export default function MemberProfile({ member, onNext, onClose }) {
  return (
    <section
      className="profile-panel"
      id="profile"
      style={{
        "--member-color": member.color,
        "--member-soft": member.colorSoft,
        "--member-deep": member.colorDeep,
      }}
      aria-live="polite"
    >
      <div className="profile-toolbar">
        <span className="section-kicker"><span className="tiny-star">✦</span> MEMBER PROFILE</span>
        <button className="text-button" onClick={onClose}>CLOSE <span>×</span></button>
      </div>

      <div className="profile-layout">
        <div className="profile-main-photo">
          <ProfileImage src={member.image} name={member.name} />
          <div className="photo-caption">
            <span>{member.name}</span>
            <small>{member.nameEn}</small>
          </div>
          <span className="photo-deco deco-one">✧</span>
          <span className="photo-deco deco-two">♡</span>
        </div>

        <div className="profile-details">
          <div className="profile-title-row">
            <div>
              <p className="eyebrow">KNIGHT MELLO / MEMBER 0{["emo", "pareo", "popa", "satbyeol"].indexOf(member.id) + 1}</p>
              <h2>{member.nameEn}<span className="title-star">✦</span></h2>
              <p className="profile-hangul">{member.name}</p>
            </div>
            <div className="color-seal" title={`${member.colorName} member`}><span /></div>
          </div>
          <p className="member-catchphrase">{member.catchphrase}</p>
          <p className="member-bio">{member.bio}</p>

          <div className="profile-info-grid">
            <InfoItem icon={CalendarDays} label="BIRTHDAY" value={member.birthday} />
            <InfoItem icon={Ruler} label="HEIGHT" value={member.height} />
            <InfoItem icon={Droplets} label="BLOOD TYPE" value={member.bloodType} />
            <InfoItem icon={Star} label="COLOR" value={member.colorName} />
          </div>

          {member.favorites?.length > 0 && (
            <div className="detail-block">
              <h3><Heart size={15} /> LITTLE THINGS</h3>
              <div className="tag-list">
                {member.favorites.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          )}

          {member.timeline?.length > 0 && (
            <div className="detail-block">
              <h3><Sparkles size={15} /> MOMENTS</h3>
              <div className="timeline">
                {member.timeline.map((item, index) => (
                  <div className="timeline-item" key={`${item.date}-${index}`}>
                    <time>{item.date}</time><span>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="profile-aside">
          <div className="aside-heading">
            <h3><ImageIcon size={15} /> GALLERY</h3>
            <span>{member.gallery?.length || 0} PHOTOS</span>
          </div>
          {member.gallery?.length > 0 ? (
            <div className="gallery-grid">
              {member.gallery.map((src, index) => (
                <a href={src} target="_blank" rel="noreferrer" key={`${src}-${index}`} className="gallery-item">
                  <ProfileImage src={src} name={member.name} />
                  <span className="gallery-open"><ArrowUpRight size={15} /></span>
                </a>
              ))}
            </div>
          ) : (
            <div className="empty-gallery">
              <ImageIcon size={22} />
              <span>YOUR FAVORITE MOMENTS</span>
              <small>Add gallery paths in members.js</small>
            </div>
          )}

          <div className="social-block">
            <h3>FOLLOW THE STAR <span>↗</span></h3>
            {member.socials?.length ? member.socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer" className="social-link">
                <SocialIcon label={social.label} /><span>{social.label}</span><ArrowUpRight size={14} />
              </a>
            )) : <p className="no-socials">공식 링크를 확인한 뒤 members.js에 추가해 주세요.</p>}
          </div>
          <button className="next-member-button" onClick={onNext}>MEET ANOTHER MEMBER <ArrowUpRight size={15} /></button>
        </aside>
      </div>
    </section>
  );
}