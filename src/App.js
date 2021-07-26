import './App.css'
import Header from './components/header/Header'
import React from "react";
import PresentationSlider from "./components/slide/PresentationSlider";
import ProductList from "./components/products/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <PresentationSlider />
      <ProductList />
    </div>
  )
}

export default App
