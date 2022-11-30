import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 400px;
    width: 100%;
    background-color: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.image;

const InfoContainer = styled.div`
    flex: 1;
`

const Slider = () => {
  return (
    <Container>
        SLIDER
    </Container>
  )
}

export default Slider