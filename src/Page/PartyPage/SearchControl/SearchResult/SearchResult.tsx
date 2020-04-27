import * as React from "react";
import styled from "styled-components";
import SearchResultCard from "./SearchResultCard/SearchResultCard";

const SearchResult: React.FunctionComponent<any>  = ({ className, cards = [] }) => {
    const cardsForRender = cards.map((card: any) => <SearchResultCard/>);

    return (
        <div className={className}>
            {cardsForRender}
        </div>
    )
}

export default styled(SearchResult)`
    margin-top: 30px;
`;