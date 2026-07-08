const API_KEY="6c10756b02b0b95891edd5b66ebcd92d";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASEU_URL}/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent}`);
    const data = await response.json()
    return data.results;

}