import React from 'react'

import * as S from './styles'

import HeroCoffe from '../../assets/coffe-hero.png'
import HeroCart from '../../assets/cart-hero.png'
import HeroCoffeMini from '../../assets/coffe-hero-mini.png'
import PackageHero from '../../assets/package-hero.png'
import TimeHero from '../../assets/time-hero.png'

import { ShoppingCart } from 'phosphor-react'

export function Home() {
    return (
        <>
            <S.HomeContainer>
                <S.HeroContainer>
                    <S.HeroContent>
                        <S.HeroTitle>
                            Encontre o café perfeito <br />
                            para qualquer hora do dia
                        </S.HeroTitle>
                        <S.HeroSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, <br /> a qualquer hora</S.HeroSubtitle>
                        <S.HeroBenefits>
                            <div>
                                <img src={HeroCart} />Compra simples e segura
                            </div>
                            <div>
                                <img src={HeroCoffeMini} alt="" />Embalagem mantém o café intacto
                            </div>
                            <div>
                                <img src={PackageHero} alt="" />Entrega rápida e rastreada
                            </div>
                            <div>
                                <img src={TimeHero} alt="" />O café chega fresquinho até você
                            </div>
                        </S.HeroBenefits>
                    </S.HeroContent>
                    <S.CoverHero>
                        <img src={HeroCoffe} alt="" />
                    </S.CoverHero>
                </S.HeroContainer>
            </S.HomeContainer>
        </>
    )
}
