import React from 'react'
import "./VideoCard.css"
import TextTruncate from "react-text-truncate"

const base_url = "https://image.tmdb.org/t/p/original/"

function VideoCard({movie}) {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="" />
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}
            />
            <h2>Movie Title</h2>
            <p>Number of Likes...</p>
        </div>
    )
}

export default VideoCard
