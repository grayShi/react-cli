import ReactDOM from 'react-dom';
import React from 'react';
import Routers from './router/index';



const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<Routers />, wrapper) : false;