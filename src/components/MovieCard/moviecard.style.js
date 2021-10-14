import styled from "styled-components";

export const MovieCardContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 7px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const PosterImageContainer = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  box-sizing: border-box;

  .rating {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin: 10px 0 0 10px;
    border: 1px solid black;
    border-radius: 50%;
    background: white;
  }

  .poster-image {
    width: 100%;
    height: 100%;
  }
`;

export const TitleContainer = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 0;
  padding: 0 10px;
  text-align: center;
`;
