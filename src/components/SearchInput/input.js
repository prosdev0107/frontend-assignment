import React from "react";
import { SearchInputContainer } from "./input.style";

const SearchInput = ({ className, children, ...restProps }) => {
  return (
    <SearchInputContainer className={`search-input-container ${className}`} {...restProps}>
      {children}
    </SearchInputContainer>
  );
};

export default SearchInput;