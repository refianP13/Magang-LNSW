import { useState } from "react"
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
//import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";



function App() {

const [products, setProducts] = useState([
  {Id: 1, title: 'Product 1', Price: 100},
  {Id: 2, title: 'Product 2', Price: 200},
  {Id: 3, title: 'Product 3', Price: 300},
  {Id: 4, title: 'Product 4', Price: 400},
  {Id: 5, title: 'Product 5', Price: 500},
  
]);

const deleteProduct = (productId) => {
  const newProducts = products.filter(product => product.Id !== productId);
  setProducts(newProducts);
}


  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<ProductList products={products} deleteProduct={deleteProduct}/>} />
          <Route exact path="/add" element={<AddProduct />} />
          <Route path="/edit/:productId" element={<EditProduct />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
