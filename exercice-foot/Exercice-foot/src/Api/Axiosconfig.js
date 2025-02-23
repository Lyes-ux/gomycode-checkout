import axios from "axios"
export const myAPIConfig= axios.create({
    
    baseURL:"https://www.thesportsdb.com/api/v1/json/3",
    
})