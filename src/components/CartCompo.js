import React from 'react'
import styled from 'styled-components'
import { Add } from '@material-ui/icons'
import { Remove } from '@material-ui/icons'

const Container = styled.div`
`
const Wrapper = styled.div`
    padding: 10px;
`
const Title = styled.h1`
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 120px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductTitle = styled.span``
const ProductArtist = styled.span``
const ProductSize = styled.span`` 

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1; 
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total"  && "600"};
    font-size: ${props=>props.type === "total"  && "24"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const CartCompo = (props) => {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice =  itemsPrice > 75 ? 0 : 10;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <Container>
        <Wrapper>
            <Title>Your Bag</Title>
            <Bottom>
                <Info>
                    {cartItems.map((item) => (
                        <div key={item.title}>
                        <Product>
                            <ProductDetail>
                                <Image src={item.img}/>
                                <Details>
                                    <ProductTitle><b>Title: </b>{item.title}</ProductTitle>
                                    <ProductArtist><b>Artist: </b>{item.artist}</ProductArtist>
                                    <ProductSize><b>Size: </b>{item.size}</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add onClick={()=>onAdd(item)}/>
                                    <ProductAmount>{item.qty} x ${item.price.toFixed(2)}</ProductAmount>
                                    <Remove onClick={()=>onRemove(item)}/>
                                </ProductAmountContainer>
                            </PriceDetail>
                        </Product>
                        </div>
                    ))}
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>${itemsPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Tax</SummaryItemText>
                        <SummaryItemPrice>${taxPrice.toFixed(2)}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping</SummaryItemText>
                        <SummaryItemPrice>${shippingPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>${totalPrice}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
    </Container>
  )
}

export default CartCompo