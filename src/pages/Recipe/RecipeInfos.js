import React from "react";
import styled from "styled-components";
import yields_icon from "../../assets/Fork_Spoon.svg";
import clock_icon from "../../assets/Clock.svg";

const Layout = styled.div`
    display: flex;
    width: max-content;
    flex-direction: column;

    padding: 40px;
    row-gap: 38px; 
    
    background: var(--color-background);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    
    @media (max-width: 768px) {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: repeat(1fr, 3);
        width: 100%;
        padding: 0;
        row-gap: 20px;
        
        box-shadow: none;
    }
`;

const InfoLayout = styled.div`
    grid-column: auto;
    display: grid;
    gap: 5px 14px;
    grid-template-columns: max-content max-content;
    grid-template-rows: max-content max-content;
    
    @media (max-width: 512px) {
        gap: 3px 5px;
    }
`;

const YieldInfoLayout = styled(InfoLayout)`
    grid-column: 1/4;
`;

const Icon = styled.img`
    height: 100%;
    grid-row: 1/3;
`;

const Title = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-tiny);
    color: var(--color-text-gray-3);
    
    @media (max-width: 768px) {
        font-size: var(--font-size-very-tiny);
    }
`;

const Value = styled.p`
    font-family: var(--font-family-primary);
    font-size: var(--font-size-small);
    color: var(--color-text-gray-1);
    
    @media (max-width: 768px) {
        font-size: var(--font-size-tiny);
    }
`;

const YieldValue = styled(Value)`
    color: var(--color-orange);
`;

const RecipeInfos = () => {
    return (
        <Layout>

            <YieldInfoLayout>
                <Icon src={yields_icon} alt="Yields Icon"/>
                <Title>YIELDS</Title>
                <YieldValue>12 servings</YieldValue>
            </YieldInfoLayout>

            <InfoLayout>
                <Icon src={clock_icon} alt="Preparation time Icon"/>
                <Title>PREP TIME</Title>
                <Value>45 minutes</Value>
            </InfoLayout>

            <InfoLayout>
                <Icon src={clock_icon} alt="Cooking time Icon"/>
                <Title>COOK TIME</Title>
                <Value>1 hour</Value>
            </InfoLayout>

            <InfoLayout>
                <Icon src={clock_icon} alt="Total time Icon"/>
                <Title>TOTAL TIME</Title>
                <Value>7,75 hours</Value>
            </InfoLayout>

        </Layout>
    );
};

export default RecipeInfos;
