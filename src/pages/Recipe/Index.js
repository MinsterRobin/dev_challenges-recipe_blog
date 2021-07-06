import React from "react";
import styled from "styled-components";
import RecipeHeader from "./RecipeHeader";
import RecipeInfos from "./RecipeInfos";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const Layout = styled.div`
    min-height: 100vh;
    max-width: 1680px;
    width: 100%;
    margin: auto;
    padding: var(--padding-size);
    
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    
    background-color: var(--color-background);
    color: var(--color-text-black);
`;

function RecipePageIndex() {
    return (
        <Layout>
            <RecipeHeader/>
            <RecipeInfos/>
            <Ingredients/>
            <Instructions/>
        </Layout>
    );
}

export default RecipePageIndex;
