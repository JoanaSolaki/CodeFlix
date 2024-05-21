"use client"

import { useEffect, useState, useContext } from "react";
import BannerHero from "@/components/BannerHero/BannerHero"
import Gallery from "@/components/Gallery/Gallery"
import { AppContext } from "@/app/AppContext";

export default function Search() {
  const appContext = useContext(AppContext)
  // FETCH POPULAR FILMS
  const [searchedMovies, setSearchedMovies] = useState([]);
  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJiMzZjMmIzMzVkYTFmYmFmYmE1MTNmMzk0MDNkYSIsInN1YiI6IjY2NDIxZjczNDBhNDM3MDQ0OTU1YzhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3FXIIRoei2-YLiCQQdR3BGqdVp_C5bnb1RiWMd6khY'
        }
      };
      fetch(`https://api.themoviedb.org/3/search/keyword?query=${appContext.search}&page=1`, options)
        .then(response => response.json())
        .then(response => {setSearchedMovies(response)})
        .catch(err => console.error(err));
  }, [])

  console.log("Ce qui a été entré est : " + searchedMovies.search);

  return (
    <>
    {/* { popularMovies && popularMovies.results && popularMovies.results.length > 0 &&
    <BannerHero info={popularMovies} text={"LES FILMS LES PLUS POPULAIRES"}></BannerHero> } */}

    <main className="wrapper">
        <Gallery list={searchedMovies}></Gallery>    
    </main>
    </>
  );
}
