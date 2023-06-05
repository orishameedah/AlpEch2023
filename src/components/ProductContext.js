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

  // return all countries 
  useEffect(()=>{
    const allState = products.map((product)=>{
      return product.state;
    });
    // console.log(allCountries);
    // remove duplicates
    const uniqueStates = ['Location (any)', ... new Set(allState)]
    // console.log(uniqueCountries)
    // set countries states
    setStates(uniqueStates);
  }, []);

  // return all properties
    useEffect(()=>{
      const allProducts = products.map((product)=>{
        return product.type;
      });
      // console.log(allCountries);
      // remove duplicates
      const uniqueProducts = ['Product Item type (any)', ... new Set(allProducts)]
      // console.log(uniqueProperties)
      // set properties states
      setProductTypes(uniqueProducts);
    }, []);

    const handleClick = () => {
      // set loading
      setLoading(true)
      // console.log(country, property, price);

      // create a function that checks if the string includes '(any)'
      const isDefault = (str) => {
        return str.split(' ').includes('(any)');
      };

      // get first value of price and parse it to number
      const minPrice = parseInt(price.split(' ')[0]);
      // get seond value of price which is the minimm price and parse it to number
      const maxPrice = parseInt(price.split(' ')[14]);
      
      const newProduct = products.filter((product)=>{
        const productPrice = parseInt(product.price);

        // if all values are selected
        if(product.state === state && product.type === productType && productPrice >= minPrice && productPrice <= maxPrice ){
          return product;
        }

        // if all values are default
        if(isDefault(state) && isDefault(productType) && isDefault(price)){
          return product;
        }

        // if state is not default
        if(!isDefault(state) && isDefault(productType) && isDefault(price)){
          return product.state === state;
        }

        // if producttype is not default
        if(!isDefault(productType) && isDefault(state) && isDefault(price)){
          return product.type === productType
        }

        // if price is not default 
        if(!isDefault(price) && isDefault(state) && isDefault(productType)){
          if(productPrice >= minPrice && productPrice <= maxPrice){
            return product;
          }
        }

        // if state & producttype is not default 
        if(!isDefault(state) && !isDefault(productType) && isDefault(price)){
          return product.state === state && product.type === productType;
        }

        // if state & price is not default
        if(!isDefault(state) && isDefault(productType) && !isDefault(price)){
          if(productPrice >= minPrice && productPrice <= maxPrice){
            return product.state === state;
          }
        }

        // if productype & price is not default
        if(isDefault(state) && !isDefault(productType) && !isDefault(price)){
          if(productPrice >= minPrice && productPrice <= maxPrice){
            return product.type === productType;
          }
        }

        // if productType & price & state is not default
        if(!isDefault(state) && !isDefault(productType) && !isDefault(price)){
          if(productPrice >= minPrice && productPrice <= maxPrice){
            return product.state === state &&  product.type === productType;
          }
        }
      });

      setTimeout(()=>{
        return newProduct.length < 1 ? setProducts([]) : setProducts(newProduct),
        setLoading(false)
      }, 700);
    }

  return <ProductContext.Provider value={{
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
  }}>{children}</ProductContext.Provider>
}

export default ProductContextProvider;