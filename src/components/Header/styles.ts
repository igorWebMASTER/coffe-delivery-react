import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  nav {
    display: flex;
    gap: 0.5rem;
    
    a {
      width: 3rem;
      /* height: 3rem; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const ButtonNavLocation = styled.div`
    background-color: ${({ theme }) => theme["purple-light"]};
    color: ${({ theme }) => theme["purple-dark"]};
    border-radius: 6px;

    width: 143px;
    height: 38px;
    
    font-size: 14px;

    display: flex;
    justify-content:center;
    align-items: center;
    gap: 0.4rem;

    img{
      max-width: 20px;
    }
`

export const ButtonNavCart = styled.div`
    background-color: ${({ theme }) => theme["yellow-light"]};
    border-radius: 6px;

    width: 38px;
    height: 38px;
    
    font-size: 14px;

    display: flex;
    justify-content:center;
    align-items: center;
    
    img{
      max-width: 20px;
    }

    transition: background all 0.3s ease-in-out;

` 