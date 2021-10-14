import React from "react";
import {
  MovieCardContainer,
  PosterImageContainer,
  TitleContainer,
} from "./moviecard.style";
import NoImage from "../../images/noimage.png";
import { getFullPath } from "../../utils";
import LazyImage from "../LazyImage";

export default function MovieCard(props) {
  const { movie, onClick } = props;

  return (
    <MovieCardContainer onClick={() => onClick(movie)}>
      <PosterImageContainer>
        <div className="rating">{movie.vote_average}</div>
        <LazyImage
          src={movie.poster_path ? getFullPath(movie.poster_path) : NoImage}
          alt={movie.title}
        />
      </PosterImageContainer>
      <TitleContainer>{movie.title}</TitleContainer>
    </MovieCardContainer>
  );
}
