"use client"

import { useEffect, useState } from "react";
import BannerHero from "@/components/BannerHero/BannerHero"
import Gallery from "@/components/Gallery/Gallery"

export default function Popular() {
  // FETCH POPULAR FILMS
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJiMzZjMmIzMzVkYTFmYmFmYmE1MTNmMzk0MDNkYSIsInN1YiI6IjY2NDIxZjczNDBhNDM3MDQ0OTU1YzhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3FXIIRoei2-YLiCQQdR3BGqdVp_C5bnb1RiWMd6khY'
      }
    };
    fetch('https://api.themoviedb.org/3/movie/popular?language=fr_FR&page=1', options)
      .then(response => response.json())
      .then(response => {setPopularMovies(response)})
      .catch(err => console.error(err));
  }, [])

  return (
    <>
    { popularMovies && popularMovies.results && popularMovies.results.length > 0 &&
    <BannerHero info={popularMovies} text={"LES FILMS LES PLUS POPULAIRES"}></BannerHero> }

    <main className="wrapper">
        <Gallery list={popularMovies}></Gallery>    
    </main>
    </>
  );
}
