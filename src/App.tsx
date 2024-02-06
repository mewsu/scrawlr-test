import React from "react";
import "./App.css";
import UpvoteContainer from "./UpvoteContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <UpvoteContainer id={1} />
          <UpvoteContainer id={2} />
          <UpvoteContainer id={3} />
        </div>
      </header>
    </div>
  );
}

export default App;
