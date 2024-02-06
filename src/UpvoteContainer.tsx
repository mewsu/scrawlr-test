import React, { useEffect, useState } from "react";
import Upvote, { UpvoteProps } from "./Upvote";

interface UpvoteContainerProps {
  id: number;
}

const UpvoteContainer: React.FC<UpvoteContainerProps> = ({ id }) => {
  const idString = "upvotesState" + id;
  const savedVotes = localStorage.getItem(idString);
  const initialVotes: UpvoteProps[] = savedVotes ? JSON.parse(savedVotes) : [];
  const [upvotes, setUpvotes] = useState<UpvoteProps[]>(initialVotes);

  // save to localStorage whenever upvotes change
  useEffect(() => {
    localStorage.setItem(idString, JSON.stringify(upvotes));
  }, [upvotes, idString]);

  const handleAddClick = () => {
    // add another upvote
    upvotes.length < 7 &&
      setUpvotes([
        ...upvotes,
        {
          isSelected: false,
          id: upvotes.length + 1,
          externalClickHandler: handleVoteClick,
        },
      ]);
  };

  const handleVoteClick = (id: number) => {
    // external vote callback that handles adding the state of that vote to storage.
    // find that vote and update the array (which will trigger storage write)
    const uv = upvotes.find((v) => v.id === id);
    uv && (uv.isSelected = !uv.isSelected);
    setUpvotes([...upvotes]);
  };

  const votesContainerStyle = {
    border: "1px solid gray",
    padding: "5px 0px",
    borderRadius: "5px",
    margin: "10px",
    width: "280px",
    display: "flex",
    justifyContent: "left",
    height: "30px",
  };

  const wrapperContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div style={wrapperContainerStyle}>
      <div style={votesContainerStyle}>
        {upvotes.map((uv) => (
          <Upvote
            isSelected={uv.isSelected}
            id={uv.id}
            externalClickHandler={handleVoteClick}
          />
        ))}
      </div>
      <div>
        <button type="button" onClick={handleAddClick}>
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default UpvoteContainer;
