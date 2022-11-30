import React from 'react'
import styled from 'styled-components';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import ProductsCont from '../components/ProductsCont';
import Footer from '../components/Footer';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import CartCompo from '../components/CartCompo';
import Product from '../components/Product'
import { popularProducts } from '../data'
import { useEffect } from 'react';
import { products } from '../data';

const FilterSuperContainer = styled.div``

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const SortFiltContainer = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`
const FilterTitle = styled.h1`
    margin: 20px;
`

const FilterSelect = styled.select`
    margin-left: 10px;
    min-width: 100px;
`
const FilterOption = styled.option`
    margin-left: 10px;
    min-width: 100px;`

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Homepage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [genreFilter, setGenreFilter] = useState('')
  const [sizeFilter, setSizeFilter] = useState('')
  const [sort, setSort] = useState("newest")
  let [data, setData] = useState([]);

  const handleGenreFilter = (e) =>{
    setGenreFilter(e.target.value);
  }

  const handleSizeFilter = (e) =>{
    setSizeFilter(e.target.value);
  }

useEffect(() => {
    const genreFiltered = popularProducts.filter(product => genreFilter.length === 0 || product.genre === genreFilter.toLowerCase() || genreFilter === 'All');
    const sizeFiltered = genreFiltered.filter(product => sizeFilter.length === 0 || product.size === sizeFilter.toLowerCase() || sizeFilter === 'All');
    setData(sizeFiltered);
  }, [genreFilter, sizeFilter]);

  return (
    <div>
    <Navbar/>
    <FilterSuperContainer>
        <FilterTitle>Products</FilterTitle>
        <FilterContainer>
            <SortFiltContainer>
                <FilterText>
                    Filter products
                </FilterText>
                <FilterSelect name= "genre" onChange={handleGenreFilter}>
                    <FilterOption disabled selected>
                        Genre
                    </FilterOption>
                    <FilterOption>All</FilterOption>
                    <FilterOption>Bass</FilterOption>
                    <FilterOption>Techno</FilterOption>
                    <FilterOption>Punk</FilterOption>
                    <FilterOption>HipHop</FilterOption>
                    <FilterOption>World</FilterOption>
                </FilterSelect>
                <FilterSelect name= "size" onChange={handleSizeFilter}>
                    <FilterOption disabled selected>
                        Size
                    </FilterOption>
                    <FilterOption>All</FilterOption>
                    <FilterOption>10-inch</FilterOption>
                    <FilterOption>12-inch</FilterOption>
                </FilterSelect>
            </SortFiltContainer>
            <SortFiltContainer>
                <FilterText>
                    Sort products
                </FilterText>
                <FilterSelect onChange={(e) => setSort(e.target.value)}>
                    <FilterOption value="newest">Newest</FilterOption>
                    <FilterOption value="plh">Price: Low to High</FilterOption>
                    <FilterOption value="phl">Price: High to Low</FilterOption>
                </FilterSelect>
            </SortFiltContainer>
        </FilterContainer>
    </FilterSuperContainer>
    <Container>
        {data.map((item) => (
            <Product item={item} key={item.id} />
        ))}
    </Container>
    <CartCompo/>
    <Footer/>
    </div>
  )
}

export default Homepage;