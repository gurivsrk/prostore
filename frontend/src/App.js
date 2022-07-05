import React from 'react'
import Header from "./component/Header";
// eslint-disable-next-line 
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";
import { Container } from "react-bootstrap"; 
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
          <main className="py-3">
            <Container>
              <Routes>
                <Route  path="/" element={<HomeScreen />} />
                <Route  path="/product/:id" element={<ProductScreen />} />
              </Routes>
            </Container>
          </main>
      <Footer />
    </BrowserRouter> 
  );
}

export default App;
