import './App.css'
import Header from './components/header/Header'
import React from "react";
import LandingPage from "./components/pages/landing/LandingPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <LandingPage />
        </div>
    )
}

export default App
