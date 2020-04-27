import * as React from "react";

import PartyPage from "../Page/PartyPage/PartyPage";
import styled from "styled-components";

const App: React.FunctionComponent<any> = ({ className }) => {
    return (<div className={className}>
        <PartyPage/>
    </div>)
}

export default styled(App)`
    width: 810px;
    margin: 140px auto;
`;
