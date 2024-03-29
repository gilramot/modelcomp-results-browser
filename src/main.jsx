import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Card from "./Card.jsx"
import Router from "./Router.jsx"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <Router/>
        <Card/>
    </React.StrictMode>,
)