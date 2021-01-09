import React, {useEffect, useState} from 'react'
import "./Results.css"
import VideoCard from "./VideoCard"
import axios from './axios'
import requests from "./requests"


function Results() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
        }

        fetchData();
    }, [])

    return (
        <div className="results">
            {movies.map((movie) => (
                <VideoCard />
            ))}
        </div>
    )
}

export default Results
