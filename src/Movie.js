function Movie (props) {
    return (
        <div>
            <h1>The Lord of the Rings: {props.movies.title}</h1>
            <p>{props.movies.hours}h {props.movies.minutes}min</p>
        </div>
    )
}

export default Movie;