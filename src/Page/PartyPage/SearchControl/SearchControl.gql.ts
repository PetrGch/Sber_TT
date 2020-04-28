import { gql } from "apollo-boost";

export const GET_CHARACTERS = gql`
query Characters($name: String)
{
  characters(filter: { name: $name }) {
    results {
      id,
      name,
      image
    }
  }
}
`;