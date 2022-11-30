import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import { useLocation } from "react";
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const ProductsCont = ({cat,filters,sort}) => {

  const[products,setProducts] = useState([]);
  const[filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      }
      catch(err){
      }
    }
    getProducts()
  },[cat]);

  useEffect(()=>{ 
      setFilteredProducts(
        products.filter(item=> 
          Object.entries(filters).every(([key,value])=>
          item[key].includes(value)
          )
        )
      );
  },[products,cat,filters]);

  return (
    <Container>
        {filteredProducts.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
  )
}

export default ProductsCont