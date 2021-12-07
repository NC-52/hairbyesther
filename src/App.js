import './App.css'
import React from "react";
import LandingPage from "./containers/landing/LandingPage";
import * as ROUTES from './constant/Routes'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductDetails from "./containers/productDetails/ProductDetails";
import CardComponent from "./components/card/Card.component";
import HeaderComponent from "./components/header/header.component";
import AdminPanel from "./containers/admin/AdminPanel";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/secure-admin" component={AdminPanel}/>
                    <div>
                        <HeaderComponent/>
                        <Route exact path={ROUTES.HOME} component={LandingPage}/>
                        <Route path={ROUTES.PRODUCT_DETAILS} component={ProductDetails}/>
                        <Route path='/card' component={CardComponent}/>
                    </div>
                </Switch>
            </div>
        </BrowserRouter>

    )
}

export default App
