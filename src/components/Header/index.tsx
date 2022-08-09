import React from 'react'
import * as S from './styles'

import logo from '../../assets/Logo.svg'
import locationIcon from '../../assets/location.svg'
import cartIcon from '../../assets/cart.svg'

import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <S.HeaderContainer>
            <span>
                <img src={logo} alt="" />
            </span>
            <nav>
                <S.ButtonNavLocation>
                    <img src={locationIcon} alt="icone de carrinho" />
                    Porto Alegre, RS
                </S.ButtonNavLocation>
                <NavLink to="/history" title="Histórico">
                    <S.ButtonNavCart>
                        <img src={cartIcon} alt="icone de carrinho" />
                    </S.ButtonNavCart>
                </NavLink>
            </nav>
        </S.HeaderContainer>
    )
}
