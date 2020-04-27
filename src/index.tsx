import * as React from "react";
import * as ReactDOM from "react-dom";

import "./index.less";

import App from './App/App';
import { ApolloProvider } from "@apollo/react-hooks";

import ApolloClient, { InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();
const client = new ApolloClient({
    cache,
    uri: 'https://rickandmortyapi.com/graphql',
});

cache.writeData({
    data: {
        searchValue: "",
        todos: [],
        visibilityFilter: 'SHOW_ALL',
    },
  });

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById("root")
);