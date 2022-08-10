import styled from "styled-components";

import Background from '../../assets/Background.png'

export const HomeContainer = styled.div`
    height: 100vh;
    margin: 3rem auto;
    background: url(${Background});
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
   
`

export const HeroContainer = styled.section`
    display: flex;
    justify-content:space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
`

export const HeroContent = styled.div`
    text-align: left;    
`

export const CoverHero = styled.div`
    
`

export const HeroTitle = styled.h1`
    font-size: 48px; 
    font-weight: 800;
    line-height: 65px;
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme["base-title"]}
`

export const HeroSubtitle = styled.p`
    color: ${({ theme }) => theme["base-subtitle"]};
    margin-top: 1rem;
    font-size: 20px;
    line-height: 26px;
`
export const HeroBenefits = styled.div`
    margin-top: 4rem;
    display: grid;
    font-size: 16px;
    color: ${({ theme }) => theme["base-subtitle"]};
    grid-template-columns: 1fr  1fr;
    row-gap: 16px;
  
    div{
        display: flex;
        gap: 12px;
        align-items: center;
        justify-items: center;
     }
` 