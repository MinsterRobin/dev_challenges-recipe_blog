import {createGlobalStyle} from "styled-components";
import React from "react";

const GlobalStylesSC = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    
    html {
        --color-background: white;
        --color-text-black: black;
        --color-text-gray-1: #333333;
        --color-text-gray-2: #4F4F4F;
        --color-text-gray-3: #BDBDBD;
        --color-text-gray-4: #828282;
        --color-orange: #F2994A;
        
        --font-size-very-tiny: 8px;
        --font-size-tiny: 10px;
        --font-size-very-small: 12px;
        --font-size-small: 14px;
        --font-size-regular: 16px;
        --font-size-medium: 18px;
        --font-size-large: 24px;
        --font-size-very-large: 48px;
        
        --font-family-primary: 'Montserrat', sans-serif;
        --font-family-secondary: 'Playfair Display', serif;
        
        --padding-size: 40px;
        
        background-color: var(--color-background);
        
        @media (max-width: 768px) {
            --padding-size: 20px;
        }
    }
`;

const GlobalStyles = (props) => {
    return(
        <>
            <GlobalStylesSC/>
            {props.children}
        </>
    );
};

export default GlobalStyles;