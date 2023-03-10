import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "../style/movie-details.css";

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://www.omdbapi.com/?i=${id}&apikey=2795e49d`
      );
      setMovieDetails(res.data);
      setIsLoading(false);
      console.log(res.data);
    };

    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return <h1>Movie details are being loaded, please wait....</h1>;
  } else if (movieDetails) {
    return (
      <div className="movie-details">
        <img src={movieDetails.Poster} alt={movieDetails.Title} />
        <h2>{movieDetails.Title}</h2>
        
        <div className="details">
        <p>Actors: {movieDetails.Actors}</p>
        <p>Awards: {movieDetails.Awards}</p>
        </div>
        
      </div>
    );
  } else {
    return null;
  }
}

/**
 * const obj = {imdbID: "value", name:"movie"};
 * const {imdbDB} = obj;
 */