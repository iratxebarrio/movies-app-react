import { getTodayMovies } from "../../services/get-movies"



export const MoviesToday = () => {

    const {data} = getTodayMovies()

    const movies = data?.results;

  return (
    <>
      <ul>
    {
      movies?.map((movie) =>
        (<li>
          {movie.title ? movie.title : movie.name}
        </li>)
      )
    }
      </ul>
    </>
    
  )
}

