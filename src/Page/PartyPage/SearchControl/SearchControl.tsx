import * as React from "react";
import styled from "styled-components";
import SearchResult from "./SearchResult/SearchResult";
import { useState } from "react";
import { SearchControlProps } from "./SearchControl.type";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_CHARACTERS } from "./SearchControl.gql";
import { debounce } from "lodash"

const SearchInput = styled.input`
    display: block;
    width: 100%;
    height: 80px;
    padding: 0 27px;
    border: 1px solid #A0A0A0;
    font-size: 30px;
    text-transform: uppercase;
`;

const SearchControl: React.FunctionComponent<SearchControlProps>  = (props) => {
    const [ getCharacters, { data, loading } ] = useLazyQuery(GET_CHARACTERS, {
        variables: { name }
      });
    const [ searchValue, setSearchValue ] = useState("");  
    const onSearchValueChange = ({ target }: any) => {
        setSearchValue(target.value);
        
        if (target.value.length > 1) {
            debounce(
                () => {getCharacters({ variables: { name: target.value } } as any);},
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