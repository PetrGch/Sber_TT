import * as React from "react";
import styled from "styled-components";
import SearchResultCard from "./SearchResultCard/SearchResultCard";
import { SearchResultProps } from "./SearchResult.type";
import { Character } from "../../PartyPage.type";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const query = gql`
                query SetDeletedId {
                    deletedId @client
                }
            `;

const SearchResult: React.FunctionComponent<SearchResultProps>  = ({ className, characters = [] }) => {
    const { data } = useQuery(query);
    const cardsForRender = characters
        .filter((character: Character) => !data.deletedId.includes(character.id))
        .map((character: Character) => <SearchResultCard key={character.id} character={character}/>);
    console.log(data);
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