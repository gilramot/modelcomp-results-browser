import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from "./Card.jsx"
import Router from "./Router.jsx"
import './index.css'
import Legend from "./Legend.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <Router/>
        <Legend/>
        <Card/>
    </React.StrictMode>,
)
