import { gql } from "apollo-boost";

export const DELETE_CARD = gql`
  mutation DeleteCard($id: Int!) {
    deleteCard(id: $id) @client
  }
`;

export const SELECT_CARD = gql`
  mutation SelectCard($character: Character) {
    selectCard(character: $character) @client
  }
`;