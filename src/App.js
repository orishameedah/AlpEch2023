import React from 'react';

// import routes and route
import { Routes, Route } from 'react-router-dom';

// import components
import Header from './components/Header';
// import Footer from './components/Footer';

// import pages
import Hero from './pages/Hero';
import ProductDetails from './pages/ProductDetails';
import ProductPage from './pages/ProductsPage';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (
   <div className='h-full bg-pattern bg-repeat'>
    <Header/>
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/product/:id' element={<ProductDetails/>} />
      <Route path='/product/' element={<ProductPage/>} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    {/* <Footer/> */}
  </div>
  );
};

export default App;
