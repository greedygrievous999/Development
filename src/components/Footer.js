import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    padding: 10px;
    display: flex;
    justify-content: space-between;
`
const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;

`
const Logo = styled.h1``

const Desc = styled.p`
    margin: 20px 0px;
`
const Link = styled.p`
    margin: 5px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const Footer = () => {
  return (
    <Container> 
        <Column>
            <Logo>SOCIALS</Logo>
            <Desc>
                Follow us here 
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Column>
        <Column>
            <Logo>
                SHIPPING
            </Logo>
            <Link>
                Addressline 1 
            </Link>
            <Link>
                Line 2 
            </Link>
            <Link>
                Line 3 
            </Link>
        </Column>
        <Column>
            <Logo>
                CONTACT
            </Logo>
            <Link>
                Contact Form 
            </Link>
            <Link>
                Phone number 
            </Link>
            <Link>
                email
            </Link>
        </Column>
    </Container>
  )
}

export default Footer