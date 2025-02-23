import { myAPIConfig } from "./Axiosconfig";

export async function getTeams(league){
    return myAPIConfig.get("/search_all_teams.php?l="+league)
}