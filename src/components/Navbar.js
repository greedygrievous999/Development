import { Search, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Cart from '../pages/Cart'

const Container = styled.div`
  height: 60px;
`
const Wrapper =  styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Language = styled.span`
  font-size: 60;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
`
const Input = styled.input`
  border: none;
`

const Logo = styled.h1`
  font-weight: bold;
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:"gray", fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BOOMKAT</Logo>
        </Center>
        <Right>
          <MenuItem>Sign In</MenuItem>
          <Link to="/cart" element={<Cart/>} >
            <MenuItem><ShoppingCart/></MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar