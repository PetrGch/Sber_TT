import * as React from "react";
import styled from "styled-components";
import SearchResult from "./SearchResult/SearchResult";

const SearchInput = styled.input`
    display: block;
    width: 100%;
    height: 80px;
    padding: 0 27px;
    border: 1px solid #A0A0A0;
    font-size: 30px;
    text-transform: uppercase;
`;

const SearchControl: React.FunctionComponent<any>  = (props) => {
    return (
        <>
            <SearchInput type="text" placeholder="Type here what you want" />
            <SearchResult/>
        </>
    )
}

export default SearchControl;