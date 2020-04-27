import * as React from "react";
import styled from "styled-components";

import "./app.less";

const Title = styled.div`color: red`;

export default class App extends React.PureComponent {
    public render() {
        return <Title>
            Hi there!!!
        </Title>
    }
}