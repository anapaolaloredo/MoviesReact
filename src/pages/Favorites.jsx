import { useMovieContext } from "../contexts/MovieContext"
import "../css/Favorites.css"
import MovieCard from "../components/MovieCard"
function Favorites(){

    const {favorites} = useMovieContext();

    if(favorites && favorites.length > 0){
        <div className = "favorites">
            <h2>Peliculas Favoritas</h2>
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>        
        </div>
    }
    return <div className="favorites-empty">

    </div>
}

export default Favorites