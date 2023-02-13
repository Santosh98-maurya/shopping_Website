import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import {useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./pages/Success";


const App = ()=>{

  return(
    // <Success />
        <Router>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products/:category' element={<ProductList/>} />
            <Route path='/product/:id' element={<Product/>} />
            <Route path='/login' element={<Login /> } />
            <Route path='/register' element={<Register/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/success' element={<Success/>} />
            
            </Routes>
        </Router>
  
  )
}

export default App;
