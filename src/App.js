import './App.css'
import Header from './components/header/Header'
import React from "react";
import LandingPage from "./components/pages/landing/LandingPage";
import Footer from "./components/footer/Footer";
import * as ROUTES from './routes/Routes'
import {BrowserRouter, Route} from "react-router-dom";
import ProductDetails from "./components/pages/productDetails/ProductDetails";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                {/*<LandingPage />*/}
                <Route path={ROUTES.HOME} component={LandingPage}/>
                <Route path={ROUTES.PRODUCT_DETAILS} component={ProductDetails}/>
                <Footer/>
            </div>
        </BrowserRouter>

    )
}

export default App
