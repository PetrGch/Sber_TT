import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { debounce } from "lodash"
import { useLazyQuery } from "@apollo/react-hooks";

import SearchResult from "./SearchResult/SearchResult";
import { SearchControlProps } from "./SearchControl.type";
import { GET_CHARACTERS } from "./SearchControl.gql";

const SearchInput = styled.input`
    display: block;
    width: 100%;
    height: 80px;
    padding: 0 27px;
    border: 1px solid #A0A0A0;
    font-size: 30px;
    text-transform: uppercase;
`;

const SearchControl: React.FunctionComponent<SearchControlProps>  = () => {
    const [ getCharacters, { data, loading } ] = useLazyQuery(GET_CHARACTERS, {
        variables: { name }
      });
    const [ searchValue, setSearchValue ] = useState("");  
    const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchValue(value);

        if (value.length > 2) {
            debounce(
                () => {getCharacters({ variables: { name: value } } as any);},
                250)();
        }
    }

    return (
        <>
            <SearchInput
                type="text" 
                placeholder="Type here what you want" 
                onChange={onSearchValueChange}
                value={searchValue}
            />
            {loading ? <h3>Loading ...</h3> : <SearchResult characters={(data && data.characters.results) || []}/>}
        </>
    )
}

export default SearchControl;