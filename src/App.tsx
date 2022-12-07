import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

export interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Products />} />
          {/* <Route path="/products/:id" element={<Product />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
