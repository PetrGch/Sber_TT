import * as React from "react";

import SearchControl from "./SearchControl/SearchControl";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Party from "./Party/Party";

const PartyPage = () => {
    return (
        <>
            <SearchControl/>
            <Party/>
        </>
    )
}

export default PartyPage;