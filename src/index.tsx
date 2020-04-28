import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.less";

import App from './App/App';
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    uri: 'https://rickandmortyapi.com/graphql',
    resolvers: {
        Mutation: {
            deleteCard: (_root, variables, { cache }) => {
                const query = gql`
                    query SetDeletedId {
                        deletedId @client
                    }
                `;

                const previous = cache.readQuery({ query });
                const data = {
                    deletedId: [...previous.deletedId, variables.id],
                };
                cache.writeQuery({ query, data });
                
                return null;
            },
            selectCard: (_root, variables, { cache }) => {
                const query = gql`
                    query SelectCard {
                        selectedCharacters {
                            rick @client
                            morty @client
                        }
                    }
                `;

                const previous = cache.readQuery({ query });

                if (/rick/.test(variables.character.name.toLowerCase())) {
                    const data = {
                        selectedCharacters: {
                            ...previous.selectedCharacters, rick: variables.character
                        }
                    }
                    cache.writeQuery({ query, data });
                }

                if (/morty/.test(variables.character.name.toLowerCase())) {
                    const data = {
                        selectedCharacters: {
                            ...previous.selectedCharacters, morty: variables.character
                        }
                    }
                    cache.writeQuery({ query, data });
                }
                // const data = {
                //     deletedId: [...previous.deletedId, variables.id],
                // };
                // cache.writeQuery({ query, data });
                
                return null;
            },
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

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById("root")
);