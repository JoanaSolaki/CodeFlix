"use client"

import { useEffect, useState } from "react";
import Banner from "@/components/Banner/Banner";

export default function FilmDetails (props:any) {
  const [movieDetails, setmovieDetails] = useState([]);
  
  // FETCH FILM
  useEffect (() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJiMzZjMmIzMzVkYTFmYmFmYmE1MTNmMzk0MDNkYSIsInN1YiI6IjY2NDIxZjczNDBhNDM3MDQ0OTU1YzhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3FXIIRoei2-YLiCQQdR3BGqdVp_C5bnb1RiWMd6khY'
      }
    };
    fetch(`https://api.themoviedb.org/3/movie/${props.params.filmId}?language=fr_FR`, options)
      .then(response => response.json())
      .then(response => setmovieDetails(response))
      .catch(err => console.error(err));
  }, [])

  return (
    <>
    <Banner info={movieDetails}></Banner>
    </>
  );
}
