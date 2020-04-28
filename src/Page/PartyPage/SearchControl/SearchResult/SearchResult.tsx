import * as React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import SearchResultCard from "./SearchResultCard/SearchResultCard";
import { SearchResultProps } from "./SearchResult.type";
import { Character } from "../../PartyPage.type";
import { DELETE_ID_QUERY } from "./SearchResult.gql";

const SearchResult: React.FunctionComponent<SearchResultProps>  = ({ className, characters = [] }) => {
    const { data } = useQuery(DELETE_ID_QUERY);
    const cardsForRender = characters
        .filter((character: Character) => !data.deletedId.includes(character.id))
        .map((character: Character) => <SearchResultCard key={character.id} character={character}/>);

    return (
        <div className={className}>
            {cardsForRender}
        </div>
    )
}

export default styled(SearchResult)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
`;