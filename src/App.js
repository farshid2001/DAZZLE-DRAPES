import './App.css';
import Navbar from './Compounats/Navbar/Nav';
import Footer from './Compounats/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/shop';
import ShopCategory from './Pages/Shopcategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import men_benner from './Compounats/Assets/banner_mens.png';
import kid_benner from './Compounats/Assets/banner_kids.png';
import women_benner from './Compounats/Assets/banner_women.png';
// import ShopContextProvider from './Context/ShopContext';

function App() {
  return (
    <div>


      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Shop Routes */}
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_benner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_benner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_benner} category="kid" />} />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>


          {/* Cart and Authentication Routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />

          {/* Fallback Route */}
          <Route
            path="*"
            element={
              <div style={{ textAlign: 'center', marginTop: '50px' }}>
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>



    </div>
  );
}

export default App;
