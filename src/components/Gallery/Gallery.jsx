import Link from 'next/link'
import './gallery.css'

export default function Gallery (props) {
    return (
    <>
    {props.list.results && props.list.results.length > 0 && (
        <section className="gallery">
            {props.list.results.map((popularMovie, index) => (
            <div key={index}> 
                <Link href={"/" + popularMovie.id}>
                    { popularMovie.poster_path ? <img src={"https://image.tmdb.org/t/p/w500/" + popularMovie.poster_path} alt="affiche film" /> : <img src="./poster_default.jpg" alt="affiche film" />}
                    <p>{popularMovie.title}</p>
                </Link> 
            </div>)
        )}
        </section>
    )}
    </>
    )
}