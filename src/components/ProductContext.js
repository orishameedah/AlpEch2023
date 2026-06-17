import React, { useState, useEffect, createContext } from 'react';

// import data from data.js
import { ProductsData } from '../data';

// Create context
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(ProductsData);
  const [state, setState] = useState('Location (any)');
  const [states, setStates] = useState([]);
  const [productType, setProductType] = useState('Product Item type (any)');
  const [productTypes, setProductTypes] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // return all states 
  useEffect(() => {
    const allState = products.map((product) => {
      return product.state;
    });
    
    // Fixed: Removed whitespace after spread operator
    const uniqueStates = ['Location (any)', ...new Set(allState)];
    setStates(uniqueStates);
  }, [products]); // Fixed: Added 'products' to dependency array

  // return all properties
  useEffect(() => {
    const allProducts = products.map((product) => {
      return product.type;
    });
    
    // Fixed: Removed whitespace after spread operator
    const uniqueProducts = ['Product Item type (any)', ...new Set(allProducts)];
    setProductTypes(uniqueProducts);
  }, [products]); // Fixed: Added 'products' to dependency array

  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    const minPrice = parseInt(price.split(' ')[0]);
    // Fixed: Index changed from 14 back to 2 to properly grab the max price string
    const maxPrice = parseInt(price.split(' ')[2]); 
      
    const newProduct = products.filter((product) => {
      const productPrice = parseInt(product.price);

      // if all values are selected
      if (product.state === state && product.type === productType && productPrice >= minPrice && productPrice <= maxPrice) {
        return true;
      }

      // if all values are default
      if (isDefault(state) && isDefault(productType) && isDefault(price)) {
        return true;
      }

      // if state is not default
      if (!isDefault(state) && isDefault(productType) && isDefault(price)) {
        return product.state === state;
      }

      // if producttype is not default
      if (!isDefault(productType) && isDefault(state) && isDefault(price)) {
        return product.type === productType;
      }

      // if price is not default 
      if (!isDefault(price) && isDefault(state) && isDefault(productType)) {
        return productPrice >= minPrice && productPrice <= maxPrice;
      }

      // if state & producttype is not default 
      if (!isDefault(state) && !isDefault(productType) && isDefault(price)) {
        return product.state === state && product.type === productType;
      }

      // if state & price is not default
      if (!isDefault(state) && isDefault(productType) && !isDefault(price)) {
        return product.state === state && productPrice >= minPrice && productPrice <= maxPrice;
      }

      // if productype & price is not default
      if (isDefault(state) && !isDefault(productType) && !isDefault(price)) {
        return product.type === productType && productPrice >= minPrice && productPrice <= maxPrice;
      }

      // if productType & price & state is not default
      if (!isDefault(state) && !isDefault(productType) && !isDefault(price)) {
        return product.state === state && product.type === productType && productPrice >= minPrice && productPrice <= maxPrice;
      }

      // Fixed: Added a final fallback return statement for the filter method
      return false;
    });

    setTimeout(() => {
      // Fixed: Cleaned up the comma operator syntax error into a readable statement block
      if (newProduct.length < 1) {
        setProducts([]);
      } else {
        setProducts(newProduct);
      }
      setLoading(false);
    }, 700);
  };

  return (
    <ProductContext.Provider value={{
      state,
      setState,
      states,
      productType,
      setProductType,
      productTypes,
      price,
      setPrice,
      products,
      loading,
      handleClick,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
