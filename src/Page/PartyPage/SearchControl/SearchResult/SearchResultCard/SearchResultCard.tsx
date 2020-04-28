import * as React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { SearchResultCardProps } from "./SearchResultCard.type";
import { DELETE_CARD, SELECT_CARD } from "./SearchResultCard.gql";

const Card = styled.div<{ imgSrc?: string }>`
    width: 100%;
    height: 100%;
    background: url(${props => props.imgSrc});
    background-size: cover;
    background-position: center;
`

const Cross = styled.span`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
`

const SearchResultCard: React.FunctionComponent<SearchResultCardProps> = ({ character, className }) => {
    const [deleteCard] = useMutation(DELETE_CARD, { variables: { id: character.id } });
    const [selectCard] = useMutation(SELECT_CARD, { variables: { character } });
    
    const onCloseCard = () => {
        deleteCard();
    }
    const onSelectCard = () => {
        selectCard();
    }

    return (
        <div className={className}>
            <Cross onClick={onCloseCard}>X</Cross>
            <Card onClick={onSelectCard} imgSrc={character.image}/>
        </div>
    )
}

export default styled(SearchResultCard)`
    position: relative;
    width: 180px;
    height: 220px;
    margin-right: 30px;
    margin-bottom: 30px;
    cursor: pointer;

    &:nth-of-type(4n) {
        margin-right: 0;
    }
`;