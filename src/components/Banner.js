import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: lightcoral;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Banner = () => {
  return (
    <Container>
        FREE SHIPPING ON ORDERS OVER $100
    </Container>
  )
}

export default Banner