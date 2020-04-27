import * as React from "react";

import SearchControl from "./SearchControl/SearchControl";
import { useApolloClient, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const PartyPage = () => {
    // const client = useApolloClient();
    // const name = "Sam" 
    // const { loading, error, data } = useQuery(GET_CHARACTERS, {
    //     variables: { name }
    //   });
    // // const { data, client } = useQuery(GET_VISIBILITY_FILTER);
    // const onSearchValueChange = ({ target }: any) => {
    //     // console.log(client, data.searchValue)
    //     // client.writeData({ data: { searchValue: target.value } });
        
    //     console.log(client)
    // }

    return (
        <SearchControl searchValue={"data.searchValue"} />
    )
}

export default PartyPage;