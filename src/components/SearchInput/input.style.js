import styled from "styled-components";
import SearchIcon from "../../images/search.png";

export const SearchInputContainer = styled.input`
    height: 24px;
    padding-left: 30px;
    border: 1px solid gray;
    background: url(${SearchIcon}) no-repeat scroll 4px;
    background-size: 20px;
`;