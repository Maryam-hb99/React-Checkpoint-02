import React from "react";
import PlayersList from "./PlayersList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "15px",backgroundColor:"gray" }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;
