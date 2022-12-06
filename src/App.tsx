import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Products />
      {/* <Router> */}
      {/* <Routes>
        <Route path="/" element={<Products />} />
        <Route path="product{id}" element={<Product />} />
      </Routes>
      </Router> */}
    </div>
  );
}

export default App;
