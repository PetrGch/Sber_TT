import { gql } from "apollo-boost";

export const DELETE_ID_QUERY = gql`
    query SetDeletedId {
        deletedId @client
    }
`;