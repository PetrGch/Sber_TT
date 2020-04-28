import * as React from "react";
import styled from "styled-components";
import { PartyProps } from "./Party.type";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const Card = styled.section<{ imgSrc?: string }>`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 180px;
    height: 220px;
    background: #DADADA url(${props => props.imgSrc});
    background-size: cover;
    background-position: center;

    & span {
        margin-bottom: 14px;
        line-height: 28px;
        font-size: 24px;
        color: #fff;
    }
`;

const RickPartyCard = styled(Card)`
    margin-right: 15px;
`;
const MortyPartyCard = styled(Card)`
    margin-left: 15px;
`;

export const SELECTED_CHARACTERS = gql`
    query SelectCard {
        selectedCharacters {
            rick @client
            morty @client
        }
    }   
`;

const Party: React.FunctionComponent<PartyProps> = ({ className }) => {
    const { data } = useQuery(SELECTED_CHARACTERS);
    const { rick, morty } = data.selectedCharacters

    return (
        <section className={className}>
            <RickPartyCard imgSrc={rick && rick.image}><span>RICK</span></RickPartyCard>
            <MortyPartyCard imgSrc={morty && morty.image}><span>MORTY</span></MortyPartyCard>
        </section>
    )
}

export default styled(Party)`
    display: flex;
    justify-content: center;
    margin-top: 100px;
`;