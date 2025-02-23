// src/PlayersList.js
import Player from "./components/Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div
      style={{
        display: "grid",
        flexWrap: "wrap",
        justifyContent: "center",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
