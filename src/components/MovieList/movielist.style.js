import styled from "styled-components";

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 411px) {
    grid-template-columns: 1fr;
  }
`;
