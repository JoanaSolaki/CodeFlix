import './banner.css'

export default function Banner (props) {
    return (
    <section className="banner">
        <img src={"https://image.tmdb.org/t/p/w500/" + props.info.backdrop_path} alt="affiche film" />
        <article>
                <img src={"https://image.tmdb.org/t/p/w500/" + props.info.poster_path} alt="affiche film" />
            <div>
                <h1>{props.info.title} ( {new Date(props.info.release_date).getFullYear()} )</h1>
                {props.info.genres && props.info.genres.length > 0 && (
                <ul>
                    {props.info.genres.map((genre, index) => (
                        <li key={ index }>
                            <p>{genre.name}</p>
                        </li>
                    ))}
                </ul>
                )}
                <p>Synopsis <br/>{props.info.overview}</p>
            </div>
        </article>
    </section>
    )
}