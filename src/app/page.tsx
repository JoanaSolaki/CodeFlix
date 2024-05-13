import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
  <>
  <main className="wrapper">
    <h1>Hi</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><a href=""><img src="" alt="affiche film" /></a></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><a href=""><img src="" alt="affiche film" /></a></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><a href=""><img src="" alt="affiche film" /></a></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><a href=""><img src="" alt="affiche film" /></a></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><a href=""><img src="" alt="affiche film" /></a></CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3"><a href=""><img src="" alt="affiche film" /></a></CarouselItem>
        </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      </Carousel>
    </main>
  </>
  );
}
