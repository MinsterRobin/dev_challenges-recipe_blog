import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Recipe/Index';
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyles>
            <Index/>
        </GlobalStyles>
    </React.StrictMode>,
    document.getElementById('root')
);
