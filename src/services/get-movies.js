import { useQuery } from "react-query"
import { BASE_API, API_KEY } from "./constants"


export const getTodayMovies = () => {
 
    const getMovies = async () => {
        const response = await fetch(BASE_API + `/trending/all/day?language=es-ES`, {
            headers: {
                'Authorization': API_KEY
            }
        })
        return response.json()
    }
    
    return useQuery ("todayMovies", getMovies)
}
