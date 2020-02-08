import styled from "styled-components"
import {StdButton} from "../Button/Button"

export const Header = styled.div`
    background: url("./logo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 447px;
    display: flex;
    flex-direction: column;
    padding: 124px 46px;
`
export const HeaderTitle = styled.h1`
    font-size: 64px;
    color: #fff;
    margin: 0;
`
export const HeaderTitleColored = styled.span`
    color: #e32626;
`
export const HeaderSub = styled.h2`
    font-size: 31px;
    color: #fff;
    margin: 0;
`
export const SocialBlock = styled.div`
    margin-top: 40px;
    ${StdButton} {
        &:not(:first-child) {
            margin-left: 10px;
        }
    }
`
