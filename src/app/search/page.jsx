"use client"

import { useEffect, useState, useContext } from "react";
import Gallery from "@/components/Gallery/Gallery"
import { AppContext } from "@/app/AppContext";

export default function Search() {
  const appContext = useContext(AppContext)
  // FETCH SEARCHED FILMS
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJiMzZjMmIzMzVkYTFmYmFmYmE1MTNmMzk0MDNkYSIsInN1YiI6IjY2NDIxZjczNDBhNDM3MDQ0OTU1YzhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3FXIIRoei2-YLiCQQdR3BGqdVp_C5bnb1RiWMd6khY'
      }
    };
      fetch(`https://api.themoviedb.org/3/search/movie?query=${appContext.search}&include_adult=false&language=fr_FR&page=1`, options)
        .then(response => response.json())
        .then(response => setSearchedMovies(response))
        .catch(err => console.error(err));
  },[appContext.search]);

  const hasSearchQuery = appContext.search && appContext.search.trim() !== "";

  return (
    <>
    <main className="wrapper">
      {hasSearchQuery ? (
          <h1>{`Résultat de la recherche pour "${appContext.search}"`}</h1>
        ) : <h2>Aucun résultat trouvé.</h2> }
      {searchedMovies ? <h2></h2> : <h2>Aucun résultat trouvé.</h2>}
      <Gallery list={searchedMovies}></Gallery>    
    </main>
    </>
  );
}
