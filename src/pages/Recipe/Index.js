import React from "react";
import styled from "styled-components";
import RecipeHeader from "./RecipeHeader";
import RecipeInfos from "./RecipeInfos";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Footer from "../../components/Footer";

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

const SubLayout = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    
    @media (max-width: 768px) {
        position: relative;
    }
`;

const RecipeInfosContainer = styled.div`
    position: absolute;
    right: 0;
    
    @media (max-width: 768px) {
        position: relative;
    }
`;

const Container = styled.div`
    width: 65%;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

function RecipePageIndex() {
    return (
        <Layout>
            <RecipeHeader/>
            <SubLayout>
                <RecipeInfosContainer><RecipeInfos/></RecipeInfosContainer>
                <Container><Ingredients/></Container>
                <Container><Instructions/></Container>
            </SubLayout>
            <Footer/>
        </Layout>
    );
}

export default RecipePageIndex;
