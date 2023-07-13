import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ year, title, summary, poster, genres}) {
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary}</p>
                <ul className="movie__genres">
                    {genres.map((genre, index) => {
                        return (
                            <li key={index}>{genre}</li>
                        )
                    })}
                </ul>
            </div>
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