import useFetch from "../hooks/useFetch";

export default function Popular() {
  const { data: popular } = useFetch<MovieType>(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );

  return (
    <div>
      <h2>🎬 Popular Movies</h2>
      <ul>
        {popular.map((movie) => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
