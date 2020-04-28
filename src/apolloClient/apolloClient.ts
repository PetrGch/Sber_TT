import { InMemoryCache, ApolloClient, HttpLink } from "apollo-boost";
import { selectCard, deleteCard } from "./apolloClient.resolver";

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    link: new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }),
    resolvers: {
        Mutation: {
            deleteCard,
            selectCard
        },
    }
});

cache.writeData({
    data: {
        searchValue: "",
        characters: [],
        deletedId: [],
        selectedCharacters: {
            __typename: 'SelectedCharacters',
            rick: null,
            morty: null
        },
    },
});

export default client;