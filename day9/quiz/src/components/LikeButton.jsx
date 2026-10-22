import { Heart } from "lucide-react";
import useCafeStore from "../store/useCafeStore";

export default function LikeButton({ id, className = "" }) {
  const isLiked = useCafeStore((state) => state.favorites.includes(id));
  const toggleFavorite = useCafeStore((state) => state.toggleFavorite);

  return (
    <button
      type="button"
      className={`like-button ${isLiked ? "liked" : ""} ${className}`}
      aria-label={isLiked ? "찜 해제" : "찜하기"}
      aria-pressed={isLiked}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggleFavorite(id);
      }}
    >
      <Heart size={19} fill={isLiked ? "currentColor" : "none"} />
    </button>
  );
}
