import './App.css'
import React from "react";
import LandingPage from "./components/pages/landing/LandingPage";
import Footer from "./components/footer/Footer";
import * as ROUTES from './constant/Routes'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductDetails from "./components/pages/productDetails/ProductDetails";
import CardComponent from "./components/card/Card.component";
import HeaderComponent from "./components/header/header.component";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <HeaderComponent/>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={LandingPage}/>
                    <Route path={ROUTES.PRODUCT_DETAILS} component={ProductDetails}/>
                    <Route path='/card' component={CardComponent}/>
                </Switch>
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>

    )
}

export default App
