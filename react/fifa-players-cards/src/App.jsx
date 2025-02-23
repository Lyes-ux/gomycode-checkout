import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "40px" }}>Joueur FIFA</h1>
      <PlayersList />
    </div>
  );
};

export default App;
