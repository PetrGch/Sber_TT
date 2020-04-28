import * as React from "react";
import * as ReactDOM from "react-dom";

import App from './App/App';
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient/apolloClient";

import "./index.less";

ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById("root")
);