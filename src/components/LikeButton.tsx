import { useToggle } from "../hooks/useToggle";
import { Heart} from "lucide-react";

const LikeButton = () => {
  const { state: isToggled, toggle: toggleLiked } = useToggle(false);

  return (
    <div>
      <button
        onClick={toggleLiked}
      >
        {isToggled ? <Heart fill="red" /> : <Heart />}
        <span>{isToggled ? "Liked" : "Like"}</span>
      </button>
    </div>
  );
};

export default LikeButton;
