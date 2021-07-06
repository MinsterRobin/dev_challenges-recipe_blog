import styled from "styled-components";
import React from "react";
import recipe_image from "../../assets/cheescake_img.png";
import dots6 from "../../assets/6dots.svg";

const Layout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 17px;
`;

const RecipeTitle = styled.p`
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-very-large);
    font-weight: 700;
    
    @media (max-width: 768px) {
        font-size: var(--font-size-large);
    }
`;

const Dots = styled.img`
    position: relative;
    
    align-self: flex-start;
    width: 13px;
    top: 5px;
    margin-right: 12px;
`;

const RecipeDescription = styled.div`
    max-width: 600px;
    display: flex;
    
    p {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-small);
        font-style: italic;
        font-weight: 500;
        color: var(--color-text-gray-2);
        
        @media (max-width: 768px) {
            font-size: var(--font-size-very-small);
        }
    }
`;

const RecipeImage = styled.img`
    width: 100%;
`;

const RecipeHeader = () => {
    return(
        <Layout>
            <RecipeTitle>Classic Cheesecake Recipe</RecipeTitle>
            <RecipeDescription>
                <Dots src={dots6} alt={"6 dots"}/>
                <p>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
            </RecipeDescription>
            <RecipeImage src={recipe_image} alt={"recipe photo"}/>
        </Layout>
    );
};

export default RecipeHeader;