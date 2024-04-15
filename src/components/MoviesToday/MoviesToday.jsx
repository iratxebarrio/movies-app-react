import { getTodayMovies } from "../../services/get-movies"
import { IMAGE_URL } from "../../services/constants";
import { Carousel } from "../Carousel/Carousel";



export const MoviesToday = () => {

    const {data} = getTodayMovies()

    const movies = data?.results;


  return (
    <>
    <Carousel  data={movies} />
    <Carousel  data={movies} />

    
    {/* <div>
    {
      movies?.map((movie) =>
    
        (
          <>
         { console.log(IMAGE_URL + movies.backdrop_path)}
        <div>
          <h2>{movie.title ? movie.title : movie.name}</h2>
          <img src={`${IMAGE_URL}${movie.backdrop_path}`} alt="" />

        
          
        </div>
          </>
        )
      )
    }
      </div> */}
    </>
    
  )
}

