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

export default function Home() {
  // FETCH BANNERHERO
  const [bannerHero, setBannerHero] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjJiMzZjMmIzMzVkYTFmYmFmYmE1MTNmMzk0MDNkYSIsInN1YiI6IjY2NDIxZjczNDBhNDM3MDQ0OTU1YzhkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J3FXIIRoei2-YLiCQQdR3BGqdVp_C5bnb1RiWMd6khY'
      }
    };
    fetch('https://api.themoviedb.org/3/tv/popular?language=fr_FR&page=1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.results && response.results.length > 0) {
          setBannerHero(response.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, [])

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
    fetch('https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1', options)
      .then(response => response.json())
      .then(response => {console.log(response); setPopularMovies(response)})
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
      .then(response => {console.log(response); setBestNotes(response)})
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
      .then(response => {console.log(response); setUpcomingMovies(response)})
      .catch(err => console.error(err));
  }, [])

  return (
    <>
    <header>
      <Navbar></Navbar>
      <section className="bannerHero">
        { popularMovies && popularMovies.results && popularMovies.results.length > 0 &&
          <img src={"https://image.tmdb.org/t/p/w500/" + popularMovies.results[0].backdrop_path} alt="affiche film" />
        }
        <h1>CodeFlix and chill</h1>
      </section>
    </header>

    <main className="wrapper">
      { popularMovies && popularMovies.results && popularMovies.results.length > 0 &&
        <Carousel className="carousel">
          <h2>LES PLUS POPULAIRES</h2>
          <CarouselContent>
            {popularMovies.results.map(popularMovie => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 carouselItem"><Link href={"/film/" + popularMovie.id}><img src={"https://image.tmdb.org/t/p/w500/" + popularMovie.poster_path} alt="affiche film" />{popularMovie.title}</Link></CarouselItem>
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
            {bestNotes.results.map(bestMovie => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 carouselItem"><Link href={"/film/" + bestMovie.id}><img src={"https://image.tmdb.org/t/p/w500/" + bestMovie.poster_path} alt="affiche film" />{bestMovie.title}</Link></CarouselItem>
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
            {upcomingMovies.results.map(upcomingMovie => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 carouselItem"><Link href={"/film/" + upcomingMovie.id}><img src={"https://image.tmdb.org/t/p/w500/" + upcomingMovie.poster_path} alt="affiche film" />{upcomingMovie.title}</Link></CarouselItem>
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
