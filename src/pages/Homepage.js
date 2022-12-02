import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import CartCompo from '../components/CartCompo';
import Product from '../components/Product'
import { popularProducts } from '../data'
import { useEffect } from 'react';

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const SortFiltContainer = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
`
const FilterSelect = styled.select`
    margin-left: 10px;
    min-width: 100px;
`
const FilterOption = styled.option`
    margin-left: 10px;
    min-width: 100px;
`
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

const Homepage = () => {
    const [genreFilter, setGenreFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState('')
    const [sort, setSort] = useState("newest")
    const [cartItems, setCartItems] = useState([]);
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
            }, 
    [genreFilter, sizeFilter]);

    useEffect(() => {
        if ((sort === "newest")) {
            setData((prev) =>
                [...prev].sort((a,b) => a.daysinstock - b.daysinstock)
            );
        }
        else if ((sort === "plh")) {
            setData((prev) =>
                [...prev].sort((a,b) => a.price - b.price)
            );
        }
        else if ((sort === "phl")) {
            setData((prev) =>
                [...prev].sort((a,b) => b.price - a.price)
            );
        }
    }, [sort]);

    const onAdd = (item) => {
        const exist = cartItems.find(x => x.title === item.title);
        if(exist) {
            setCartItems(
                cartItems.map((x) => 
                x.title === item.title ? {...exist, qty: exist.qty +1} : x 
                )
            );
        } else {
            setCartItems([...cartItems, {...item, qty: 1}])
        }
    };

    const onRemove = (item) => {
        const exist = cartItems.find((x) => x.title === item.title);
        if(exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.title !== item.title));
        } else {
            setCartItems(
                cartItems.map((x) => 
                x.title === item.title ? {...exist, qty: exist.qty -1} : x 
                )
            );
        }
    }

    return (
        <div>
        <Navbar/>
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
        <Container>
            {data.map((item) => (
                <Product onAdd={onAdd} cartItems={cartItems} item={item} key={item.title} />
            ))}
        </Container>
        <CartCompo onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
        <Footer/>
        </div>
    )
}

export default Homepage;