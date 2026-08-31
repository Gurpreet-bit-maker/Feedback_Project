import { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeAndCom() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      <Heart
        size={28}
        className={liked ? "fill-red-500 text-red-500" : "text-gray-400"}
      />
    </button>
  );
}
