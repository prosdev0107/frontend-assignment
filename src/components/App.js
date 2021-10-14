import React, { useMemo } from "react";
import logo from "../images/logo.svg";
import SearchInput from "./SearchInput";
import MovieList from "./MovieList";
import { AppContainer, AppHeaderContainer } from "./app.style";
import useFetch from "../helpers/useFetch";

const FETCH_LATENCY = 1000;
let timer = null;

const App = () => {
  const [data, loading, error, fetchData] = useFetch({ url: "/movie/latest" });

  const handleChange = (e) => {
    const keyword = e.target.value;
    if (keyword) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(() => {
        fetchData("/search/movie", { query: keyword });
        timer = null;
      }, FETCH_LATENCY);
    }
  };

  const movies = useMemo(() => {
    if (!data || !data.data) return [];
    let movies = data.data.results ? data.data.results : [data.data];
    return movies;
  }, [data]);

  return (
    <AppContainer>
      <AppHeaderContainer>
        <img src={logo} alt="Timescale" />
        <SearchInput placeholder="Search for a movie" onChange={handleChange} />
      </AppHeaderContainer>
      <p className="error">{error}</p>
      {loading && <p className="loading">Loading...</p>}
      <hr />
      <MovieList movies={movies} />
    </AppContainer>
  );
};

export default App;
