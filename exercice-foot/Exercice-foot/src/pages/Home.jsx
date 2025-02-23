import { Link } from "react-router-dom";

export default function Home() {
  return (
    <nav>
      <li>
        <Link to={"/teams"}>
          <button className="btn bg-amber-900 flex ">TEAMS</button>
        </Link>
      </li>
      <li>
        <Link to={"/teams/4235"}>
          <button className="btn bg-amber-900 flex">TEAMS-ID</button>
        </Link>
      </li>
    </nav>
  );
}
