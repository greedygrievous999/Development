import React from 'react'
import styled from 'styled-components'

const HoverAction = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const ImageContainer = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;
    position: relative;

    &:hover ${HoverAction}{
        opacity: 1;
    }
`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
const AddtoCartButton = styled.button`
    width: 30%;
    padding: 5px;
    background-color: white;
    color: coral;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border: 3px;
    border-color: coral;
    transition: all 0.5s ease;

    &:hover{
        background-color: lightcoral;
        color: white;
        transform: scale(1.3);

    }
    &:checked{
        background-color: white;
        transform: scale(0.9);  
    }
`
const TextInfo = styled.div`
    display: flex;
    flex: wrap;
    margin: 2px;
    color: white;
    transition: all 0.5s ease;

    &:hover{
        background-color: lightcoral;
    }
`
const Title = styled.span`
    font-weight: 400;
    font-size: 22px;
`
const Artist = styled.span`
    font-weight: 600;
    font-size: 16px;
`
const GenreSize = styled.span`
    font-weight: 500;
    font-size: 14px;
`
const Desc = styled.span`
    font-weight: 400;
    font-size: 14px;
`
const Product = (props) => {

  const { item, onAdd } = props;

    return (
        <ImageContainer>
            <Image src={item.img}/>
            <HoverAction>     
                <TextInfo>
                    <Title>{item.title.toUpperCase()}</Title>
                </TextInfo>
                <TextInfo>
                    <Artist>{item.artist.toUpperCase()}</Artist>
                </TextInfo>
                <TextInfo>
                    <GenreSize> {item.genre.toUpperCase()} / {item.size.toUpperCase()} </GenreSize>
                </TextInfo>
                <TextInfo>
                    <Desc>$ {item.price}</Desc>
                </TextInfo>
                <AddtoCartButton onClick={()=>onAdd(item)}>ADD TO CART</AddtoCartButton>
            </HoverAction>
        </ImageContainer>
    )
  }

export default Product