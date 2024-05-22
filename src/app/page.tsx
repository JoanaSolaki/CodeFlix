"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react";
import Link from "next/link";
import BannerHero from "@/components/BannerHero/BannerHero"
import { Metadata } from "next";

export default function Home() {
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

  // FETCH UPCOMINGS
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJiMzZjMmIzMzVkYTFmYmFmYmE1MTNmMzk0MDNkYSIsInN1YiI6IjY2NDIxZjczNDBhNDM3MDQ0OTU1YzhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3FXIIRoei2-YLiCQQdR3BGqdVp_C5bnb1RiWMd6khY'
      }
    };
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=fr_FR&page=1', options)
      .then(response => response.json())
      .then(response => {setUpcomingMovies(response)})
      .catch(err => console.error(err));
  }, [])

  return (
    <>
    { popularMovies && popularMovies.results && popularMovies.results.length > 0 &&
    <BannerHero info={popularMovies} text={"CodeFlix and chill"}></BannerHero> }

    <main className="wrapper">
      { popularMovies && popularMovies.results && popularMovies.results.length > 0 &&
        <Carousel className="carousel">
          <h2>LES PLUS POPULAIRES</h2>
          <CarouselContent>
            {popularMovies.results.map((popularMovie:any, index:number) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 carouselItem" key={ index }><Link href={"/" + popularMovie.id}><img src={"https://image.tmdb.org/t/p/w500/" + popularMovie.poster_path} alt="affiche film" />{popularMovie.title}</Link></CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      }

      { bestNotes && bestNotes.results && bestNotes.results.length > 0 &&
        <Carousel className="carousel">
          <h2>LES MEILLEURES NOTES</h2>
          <CarouselContent>
            {bestNotes.results.map((bestMovie:any, index:number) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 carouselItem" key={ index }><Link href={"/" + bestMovie.id}><img src={"https://image.tmdb.org/t/p/w500/" + bestMovie.poster_path} alt="affiche film" />{bestMovie.title}</Link></CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      }

      { upcomingMovies && upcomingMovies.results && upcomingMovies.results.length > 0 &&
        <Carousel className="carousel">
          <h2>SORTIE PROCHAINEMENT</h2>
          <CarouselContent>
            {upcomingMovies.results.map((upcomingMovie:any, index:number) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 carouselItem" key={ index }><Link href={"/" + upcomingMovie.id}><img src={"https://image.tmdb.org/t/p/w500/" + upcomingMovie.poster_path} alt="affiche film" />{upcomingMovie.title}</Link></CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      }
      </main>
    </>
  );
}
