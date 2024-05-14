"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { log } from "console";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar"

export default function FilmDetails (props) {
  // FETCH FILM
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJiMzZjMmIzMzVkYTFmYmFmYmE1MTNmMzk0MDNkYSIsInN1YiI6IjY2NDIxZjczNDBhNDM3MDQ0OTU1YzhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3FXIIRoei2-YLiCQQdR3BGqdVp_C5bnb1RiWMd6khY'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/find/id=${props.params.filmId}?language=fr_FR`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <>
    <header>
      <Navbar></Navbar>
      <section className="bannerHero">

      </section>
    </header>

    <main className="wrapper">
    
    </main>
    </>
  );
}
