import * as React from "react"
import {Header, HeaderTitle, HeaderTitleColored, HeaderSub, SocialBlock} from "../components/Header/Header"
import {StdButton} from "../components/Button/Button"

export const AppHeader = () => (
    <Header>
        <HeaderTitle>
            <HeaderTitleColored>#hangout</HeaderTitleColored>
            likealocal
        </HeaderTitle>
        <HeaderSub>Overcome language barrier through music</HeaderSub>

        <SocialBlock>
            <StdButton bold color="#1876f2">Continue with Facebook</StdButton>
            <StdButton bold color="#1bb954">Continue with Spotify</StdButton>
        </SocialBlock>
    </Header>
)
