import { useLocation, useParams } from "react-router-dom";
import "./Detail.css"
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
    const [movieInfo, setMovieInfo] = useState({})
    const location = useLocation();
    console.log(' location: ',  location);
    // const { year, title, summary, poster } = location.state;
    const params = useParams()
    console.log('params: ', params);

    useEffect(() => {
        if(!params?.id) return
        getMovieInfo(params.id)
    }, [])

    useEffect(() => {
        console.log('movieInfo: ', movieInfo);
    }, [movieInfo])

    const getMovieInfo = (id) => {
        axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((res) => {
                console.log('res: ', res);
                if(res?.data?.data?.movie){
                    setMovieInfo(res.data.data.movie)
                }
                
            })
    }

    return (
        <div className="movie-detail">
            <img src={movieInfo?.large_cover_image} alt={movieInfo?.title} title={movieInfo?.title} />
            <div className="movie-detail__data">
                <h3 className="movie-detail__title">
                    {movieInfo?.title}
                    <span>{movieInfo?.year}</span>
                </h3>
                <p className="movie-detail__summary">{movieInfo?.description_full}</p>
                <ul className="movie-detail__genres">
                    {movieInfo?.genres?.map((genre, index) => {
                        return (
                            <li key={index}>{genre}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Detail;