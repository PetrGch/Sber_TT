import * as React from "react";
import styled from "styled-components";
import SearchResult from "./SearchResult/SearchResult";
import { useState } from "react";
import { SearchControlProps } from "./SearchControl.type";
import { useApolloClient, useQuery, useLazyQuery } from "@apollo/react-hooks";
import { gql, FetchMoreQueryOptions } from "apollo-boost";

const SearchInput = styled.input`
    display: block;
    width: 100%;
    height: 80px;
    padding: 0 27px;
    border: 1px solid #A0A0A0;
    font-size: 30px;
    text-transform: uppercase;
`;

const GET_CHARACTERS = gql`
query Characters($name: String)
{
  characters(filter: { name: $name }) {
    results {
      id,
      name
    }
  }
}
`;

const SearchControl: React.FunctionComponent<SearchControlProps>  = (props) => {
    const [ getCharacters, { data, loading, error } ] = useLazyQuery(GET_CHARACTERS, {
        variables: { name }
      });
    const [ searchValue, setSearchValue ] = useState("");  
    const onSearchValueChange = ({ target }: any) => {
        setSearchValue(target.value);
        getCharacters({ variables: { name: target.value } } as any);
    }
    console.log(data, loading, searchValue)
    
    return (
        <>
            <SearchInput
                type="text" 
                placeholder="Type here what you want" 
                onChange={onSearchValueChange}
                value={searchValue}
            />
            {loading ? <h3>Loading ...</h3> : <SearchResult characters={data}/>}
        </>
    )
}

export default SearchControl;