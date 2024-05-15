import './bannerHero.css'

export default function BannerHero (props) {
    return (
    <section className="bannerHero">
        <img src={"https://image.tmdb.org/t/p/w500/" + props.info.results[0].backdrop_path} alt="affiche film" />
        <h1>{props.text}</h1>
    </section>
    )
}