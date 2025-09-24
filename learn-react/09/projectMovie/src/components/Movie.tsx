import useFetch from "../hooks/useFetch";
import MovieError from "./MovieError";
import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import MovieLoader from "./MovieLoader";
import MovieMain from "./MovieMain";

export default function Movie() {
  const {
    data: nowPlaying,
    isLoading: isLoadingNowPlaying,
    error: errorNowPlaying,
  } = useFetch<MovieType>(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
  );

  const {
    data: popular,
    isLoading: isLoadingPopular,
    error: errorPopular,
  } = useFetch<MovieType>(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
  );

  const {
    data: upcoming,
    isLoading: isLoadingUpcoming,
    error: errorUpcoming,
  } = useFetch<MovieType>(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
  );

  const movieData = [
    {
      title: "Now-Playing",
      data: nowPlaying,
      isLoading: isLoadingNowPlaying,
      error: errorNowPlaying,
    },
    {
      title: "Popular",
      data: popular,
      isLoading: isLoadingPopular,
      error: errorPopular,
    },
    {
      title: "Upcoming",
      data: upcoming,
      isLoading: isLoadingUpcoming,
      error: errorUpcoming,
    },
  ];

  if (isLoadingNowPlaying || isLoadingPopular || isLoadingUpcoming) {
    const loadingSection = movieData.find((section) => section.isLoading);
    const loadingTitle = loadingSection ? loadingSection.title : "Loading";

    return <MovieLoader title={loadingTitle} />;
  }

  if (errorNowPlaying || errorPopular || errorUpcoming) {
    const errorSection = movieData.find((section) => section.error);
    const errorTitle = errorSection ? errorSection.title : "Unknown error";

    return <MovieError title={errorTitle} />;
  }

  return (
    <>
      <MovieHeader />
      <MovieMain />
      {movieData.map((section, idx) => (
        <MovieList
          key={idx}
          data={section.data} // 영화 배열
          title={section.title} // 제목
          isLoading={section.isLoading} // 로딩 상태
        />
      ))}
    </>
  );
}
