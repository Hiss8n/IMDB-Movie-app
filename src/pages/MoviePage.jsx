import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MoviePage = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState("");

  const GetMovie = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=90070f247ab06aa7227129104522f6f4`
      );
      const movie = await res.json();
      setMovie(movie);
      /*   console.log(movie) */
    } catch (error) {
      console.log("Error", error);
    }
  };
 

  useEffect(() => {
    GetMovie()
  }, [movie])
  return (
    <div className="w-full">
      <div className="p-4 md:p-8 flex flex-cols md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={movie.backdrop_path}
          width={200}
          height={320}
          className="rounded-lg"
          /*  style={{ maxWidth: "100%", height: "100%" }} */
        ></img>
        <div className="p-2">
          <h2 className="text-2xl text-bold flex font-medium">
            {movie.title || movie.name}
          </h2>
          <p className="text-sm mb-2">{movie.overview}</p>

          <p className="mb-3">
            <span className="font-semibold mr-3">Date released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            {" "}
            <span className="font-semibold mr-3">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};
