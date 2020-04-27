import * as React from "react";
import styled from "styled-components";

const Card = styled.img`
    
`

const Cross = styled.span`

`

const SearchResultCard: React.FunctionComponent<any>  = ({ className, imgUrl, name, closeCard }) => {
    return (
        <div className={className}>
            <Cross onClick={closeCard}>X</Cross>
            <Card src={imgUrl} alt={name} title={name}/>
        </div>
    )
}

export default styled(SearchResultCard)`
    margin-top: 30px;
`;