import PropTypes from "prop-types";
import "./Movie.css"
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <div className="movie-component">
            <Link to={`/movie-detail/${id}`}>
                <img src={poster} alt={title} title={title} />
                <div className="movie-info">
                  {summary.length ? summary.slice(0, 200) : 'no comment'}
                  {summary.length > 200 ? '...' : ''}
                </div>
            </Link>
        </div>
    )
}


//소문자 주의
Movie.prototypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired //배열안에 있는 데이터 검사
    // genres:PropTypes.array.isRequired, 변수타입만
}

export default Movie;