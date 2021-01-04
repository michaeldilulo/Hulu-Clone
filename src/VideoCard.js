import React from 'react'
import "./VideoCard.css"

function VideoCard() {
    return (
        <div className="videoCard">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/Movies/1996/B0032KLAKE_PrimalFear_UXPA1._V391273729_SX1080_.jpg" alt="" />
            <p>This is a film about coding...</p>
            <h2>Movie Title</h2>
            <p>Number of Likes...</p>
        </div>
    )
}

export default VideoCard
