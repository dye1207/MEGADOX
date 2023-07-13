import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await axios.get(
          "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
        );
        setMovies(movies.data.data.movies); //20개의 배열 데이터
        setIsLoading(false);
      } catch (error) {
        console.log("오류");
      }
    }
    getMovies();
  }, []); // 빈배열은 처음에만 수행

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => {
            return (
              <Movie
                // key={movie.id} 유일한 값이라 key로 설정
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
export default App;
