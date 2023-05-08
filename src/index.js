import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/nav';
import  App from './App';
// import App from './App';
// import Web from './App';
// import {Web} from "./App";
import Whatsapp from './components/jack';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).
render(<>
<App/>
</>);

// ReactDOM.render(<htmnl></htmnl>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
