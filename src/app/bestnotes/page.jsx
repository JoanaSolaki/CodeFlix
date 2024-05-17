"use client"

import { useEffect, useState } from "react";
import BannerHero from "@/components/BannerHero/BannerHero"
import Gallery from "@/components/Gallery/Gallery"

export default function Popular() {
  // FETCH BEST FILMS
  const [bestNotes, setBestNotes] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJiMzZjMmIzMzVkYTFmYmFmYmE1MTNmMzk0MDNkYSIsInN1YiI6IjY2NDIxZjczNDBhNDM3MDQ0OTU1YzhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3FXIIRoei2-YLiCQQdR3BGqdVp_C5bnb1RiWMd6khY'
      }
    };
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=fr_FR&page=1', options)
      .then(response => response.json())
      .then(response => {setBestNotes(response)})
      .catch(err => console.error(err));
  }, [])  

  return (
    <>
    { bestNotes && bestNotes.results && bestNotes.results.length > 0 &&
    <BannerHero info={bestNotes} text={"LES FILMS LES MIEUX NOTÉS"}></BannerHero> }

    <main className="wrapper">
        <Gallery list={bestNotes}></Gallery>    
    </main>
    </>
  );
}
