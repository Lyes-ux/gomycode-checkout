import { useQuery } from "@tanstack/react-query";
import { getTeams } from "../Api/teams";

export default function Teams() {
  const { isFetching, error, data } = useQuery({
    queryFn: () => getTeams("English Premier League"),
    key: "teams",
  });
  const teams = data.data.teams;
  console.log(teams, error, isFetching);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" btn bg-red-500 text-2xl">PLAYERS</div>
      
    </div>
  );
}
