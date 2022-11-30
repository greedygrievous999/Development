import React from 'react'
import styled from 'styled-components'

const SuperContainer = styled.div``

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

const Filter = () => {
  return (
    <SuperContainer>
        <Title>Products</Title>
        <FilterContainer>
            <SortFiltContainer>
                <FilterText>
                    Filter products
                </FilterText>
                <FilterSelect name= "genre" onChange={handleFilters}>
                    <FilterOption disabled>
                        Genre
                    </FilterOption>
                    <FilterOption>All</FilterOption>
                    <FilterOption>Bass</FilterOption>
                    <FilterOption>Techno</FilterOption>
                    <FilterOption>Punk</FilterOption>
                    <FilterOption>HipHop</FilterOption>
                    <FilterOption>World</FilterOption>
                </FilterSelect>
            </SortFiltContainer>
            <SortFiltContainer>
                <FilterText>
                    Sort products
                </FilterText>
                <FilterSelect>
                    <FilterOption>Newest</FilterOption>
                    <FilterOption>Price: Low to High</FilterOption>
                    <FilterOption>Price: High to Low</FilterOption>
                </FilterSelect>
            </SortFiltContainer>
        </FilterContainer>
    </SuperContainer>
  )
}

export default Filter