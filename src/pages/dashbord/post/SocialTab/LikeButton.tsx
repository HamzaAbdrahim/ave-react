import { useState } from "react";

const LikeButton = () => {
  // Define state and toggle function
  const [isliked, setLiked] = useState<boolean>(false);

  // Toggle function
  const toggleState = () => {
    setLiked((prevLiked) => !prevLiked);
  };

  return (
    <button onClick={toggleState}>
      {isliked ? (
        <i className="bi bi-suit-heart-fill clr-blue-gray"></i>
      ) : (
        <i className="bi bi-suit-heart clr-blue-gray"></i>
      )}
    </button>
  );
};

export default LikeButton;
