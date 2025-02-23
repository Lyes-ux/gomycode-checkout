import { useParams } from "react-router-dom";

export default function TeamID() {
  const { teamId } = useParams();
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" btn bg-red-500 text-2xl">PLAYERS of {teamId}</div>
    </div>
  );
}
