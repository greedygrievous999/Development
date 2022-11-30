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
    min-width: 100px;  
`

const Homepage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [filters,setFilters] = useState({})
  const [sort,setSort] = useState("newest")

  const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value
    })
  }

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
                <FilterSelect name= "genre" onChange={handleFilters}>
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
                <FilterSelect name= "size" onChange={handleFilters}>
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
    <ProductsCont cat={cat} filters={filters} sort={sort}/>
    <CartCompo/>
    <Footer/>
    </div>
  )
}

export default Homepage;