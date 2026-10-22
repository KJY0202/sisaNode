import MemberCard from "./MemberCard.jsx";

export default function MemberGrid({ members, selectedId, onSelect }) {
  return (
    <div className="member-grid">
      {members.map((member, index) => (
        <MemberCard
          key={member.id}
          member={member}
          index={index}
          selected={selectedId === member.id}
          onClick={() => onSelect(member.id)}
        />
      ))}
    </div>
  );
}