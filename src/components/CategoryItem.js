import { Info } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container =  styled.div`
    flex:1; 
    margin: 3px;
`
const Image =  styled.div`
    width: 100%;
`

const Title =  styled.div``
const Button =  styled.div``

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem