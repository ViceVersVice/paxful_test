import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { MainPage } from '../tradePage/mainPage.js';


const App = () => {
    return <MainPage></MainPage>
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
