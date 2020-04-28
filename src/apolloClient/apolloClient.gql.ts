import { gql } from "apollo-boost";

export const SET_DELETED_ID = gql`
    query SetDeletedId {
        deletedId @client
    }
`;

export const SELECT_CARD = gql`
    query SelectCard {
        selectedCharacters {
            rick @client
            morty @client
        }
    }
`;
