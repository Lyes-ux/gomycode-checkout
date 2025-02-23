// src/Player.js
import { Card, Button } from "react-bootstrap";
import "./Players.css";
const Player = ({ name, team, nationality, shirtNumber, age, imageUrl }) => {
  return (
    <Card className="player-card">
      <Card.Img variant="top" src={imageUrl} alt={`${name}'s image`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Team: {team}</Card.Subtitle>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Shirt Number: {shirtNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
        <Button
          variant="primary"
          onClick={() => alert(`More info about ${name}`)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "String",
  team: "String",
  nationality: "String",
  shirtNumber: "String",
  age: "String",
  imageUrl: "https://via.placeholder.com/150",
};

export default Player;
