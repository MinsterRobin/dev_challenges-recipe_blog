import React from "react";
import styled from "styled-components";
import SectionTitle from "./SectionTitle";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    width: 60%;
`;

const SubSectionTitle = styled.p`
    font-family: var(--font-family-secondary);
    font-size: var(--font-size-medium);
    font-weight: 400;
    font-style: italic;
    
    @media(max-width: 768px) {
        font-size: var(--font-size-regular);
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`;

const ListItem = styled.div`
    display: flex;
    column-gap: 17px;
       
    p {
        font-family: var(--font-family-primary);
        font-size: var(--font-size-regular);
        font-weight: 400;
        
        @media (max-width: 768px) {
            font-size: var(--font-size-small);
        }
    }
`;

const Checkbox = styled.div`
    width: 21px;
    min-width: 21px;
    height: 21px;
    border: solid 1px #828282;
    border-radius: 4px;
`;

const Ingredients = () => {
    return(
        <Layout>
            <SectionTitle>Ingredients</SectionTitle>
            <SubSectionTitle>Graham Cracker Crust</SubSectionTitle>
            <List>
                <ListItem><Checkbox /><p>1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full sheet graham crackers)</p></ListItem>
                <ListItem><Checkbox /><p>5 Tablespoons (70g) <b>unsalted butter</b>, melted</p></ListItem>
                <ListItem><Checkbox /><p>1/4 cup (50g) <b>granulated sugar</b></p></ListItem>
            </List>
            <SubSectionTitle>Cheesecake</SubSectionTitle>
            <List>
                <ListItem><Checkbox /><p>four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to room temperature</p></ListItem>
                <ListItem><Checkbox /><p>1 cup (200g) <b>granulated sugar</b></p></ListItem>
                <ListItem><Checkbox /><p>1 cup (240g) full-fat <b>sour cream</b>, at room temperature</p></ListItem>
                <ListItem><Checkbox /><p>1 teaspoon <b>pure vanilla extract</b></p></ListItem>
                <ListItem><Checkbox /><p>2 teaspoons <b>fresh lemon juice</b> (optional, but recommended)</p></ListItem>
                <ListItem><Checkbox /><p>3 large <b>eggs</b>, at room temperature</p></ListItem>
                <ListItem><Checkbox /><p>topping suggestions: <i>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</i> (recipe in notes)</p></ListItem>
            </List>
        </Layout>
    );
};

export default Ingredients;