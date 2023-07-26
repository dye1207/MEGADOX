import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {

  const genreList = ['Action', 'Adventure', 'Animation', 'Biography', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Film-Noir', 'History', 'Horror', 'Music', 'Musical', 'Mystery', 'Romance', 'Sci-Fi', 'Short', 'Sport', 'Thriller', 'War', 'Western'];
  const topGenreList = [ 'Action', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Thriller', 'Western'];
  const initTopGenreMap = topGenreList.reduce((obj, genre) => {
    obj[genre] = []
    return obj
  }, {});

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [topGenreMap, setTopGenreMap] = useState(initTopGenreMap)

  useEffect(() => {
    console.log('topGenreMap: ', topGenreMap);
  }, [topGenreMap])


  useEffect(() => {
    async function getMovies() {

      try {
        const getGenrePromiseList = topGenreList
        .map(genre => axios.get(`https://yts.mx/api/v2/list_movies.json?sort_by=rating&genre=${genre}`))
      // console.log('getGenreList: ', getGenreList);
        const res = await Promise.all(getGenrePromiseList)
        console.log('res: ', res);

        const tempTopGenreMap = JSON.parse(JSON.stringify(topGenreMap))

        res.map((resItem, Index) => {
          tempTopGenreMap[topGenreList[Index]] = resItem?.data?.data?.movies ?? []
        })
        console.log('tempTopGenreMap: ', tempTopGenreMap);

        setTopGenreMap(tempTopGenreMap)
        setIsLoading(false);
      } catch (error) {
        console.log("오류");
      }
    }
    getMovies();
  }, []); // 빈배열은 처음에만 수행

  return (
    <>
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
        <>
          {
            topGenreList.map((topGenre) => {
              return (
                <div className="genre-row">
                  <div className="genre-title">{topGenre}</div>
                    <ul className="movie-list">
                      {
                        topGenreMap[topGenre].map(movieItem => (
                          <li className="movie-item">
                            <Movie
                              key={movieItem.id}
                              id={movieItem.id}
                              year={movieItem.year}
                              title={movieItem.title}
                              summary={movieItem.summary}
                              poster={movieItem.medium_cover_image}
                              genres={movieItem.genres}
                            />
                        </li>
                        ))
                    }
                </ul>
              </div>
            )
          })
        }
      </>
      )}
    </section>
    </>
  );
}
export default Home;
