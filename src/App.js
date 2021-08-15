import './App.css'
import Header from './components/header/Header'
import React from "react";
import LandingPage from "./components/pages/landing/LandingPage";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <LandingPage />
            <Footer />
        </div>
    )
}

export default App
