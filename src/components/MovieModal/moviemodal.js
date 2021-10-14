import React from "react";
import moment from "moment";
import { ModalContainer } from "./moviemodal.style";
import useFetch from "../../helpers/useFetch";
import LazyImage from "../LazyImage";
import NoImage from "../../images/noimage.png";
import { getFullPath } from "../../utils";

export default function MovieModal(props) {
  const { movie, onClose } = props;
  const [data, loading, error] = useFetch({ url: `/movie/${movie.id}` });

  return (
    <ModalContainer>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {loading && <div>loading....</div>}
        {error && <div>{error}</div>}
        {!loading && data && (
          <div className="modal-body">
            <h3>{data.data.title}</h3>
            <div className="description">
              <div className="image">
                <LazyImage
                  src={
                    data.data.poster_path
                      ? getFullPath(data.data.poster_path)
                      : NoImage
                  }
                  alt={data.data.title}
                />
              </div>
              <div className="overview">
                <p>
                  <b>Release data: </b>
                  <span>
                    {moment(data.data.release_date).format("MMMM D YYYY")}
                  </span>
                </p>
                <p>{data.data.overview}</p>
                <p>
                  <b>{data.data.vote_average}</b> / 10 ({data.data.vote_count}{" "}
                  total votes)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </ModalContainer>
  );
}
