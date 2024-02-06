import React, { useState } from "react";

export interface UpvoteProps {
  isSelected: boolean;
  externalClickHandler?: (id: number) => void;
  id: number;
}

const Upvote: React.FC<UpvoteProps> = ({
  isSelected,
  externalClickHandler,
  id,
}) => {
  const [selected, setSelected] = useState(isSelected);

  const handleClick = () => {
    setSelected(!selected);
    externalClickHandler && externalClickHandler(id);
  };

  const upvoteStyle = {
    backgroundColor: selected ? "#E5E8FD" : "#F4F6F8",
    color: selected ? " #253CF2" : "#343A40",
  };

  return (
    <button
      aria-label="upvote"
      type="button"
      style={upvoteStyle}
      onClick={handleClick}
      key={id}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default Upvote;
