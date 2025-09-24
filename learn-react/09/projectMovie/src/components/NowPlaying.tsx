import useFetch from "../hooks/useFetch";

export default function NowPlaying() {
  const { data: nowPlaying } = useFetch<MovieType>(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );

  return (
    <div>
      <h2>🎬 Now Playing Movies</h2>
      <ul>
        {nowPlaying.map((movie) => (
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
