import './banner.css'

export default function Banner (props) {
    return (
    <section className="banner">
        { props.info.backdrop_path ? <img src={"https://image.tmdb.org/t/p/original/" + props.info.backdrop_path} alt="affiche film" /> : <img src="./banner_default.jpg" alt="affiche film" />}
        <article>
        { props.info.poster_path ? <img src={"https://image.tmdb.org/t/p/original/" + props.info.poster_path} alt="affiche film" /> : <img src="./poster_default.jpg" alt="affiche film" />}
            <div>
                <h1>{props.info.title} ({new Date(props.info.release_date).getFullYear()})</h1>
                {props.info.genres && props.info.genres.length > 0 && (
                <ul>
                    {props.info.genres.map((genre, index) => (
                        <li key={ index }>
                            <p className='tag'>{genre.name}</p>
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