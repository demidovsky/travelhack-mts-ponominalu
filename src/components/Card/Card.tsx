import styled from "styled-components"
import {textOverflow} from "../../utils/util"

export const Card = styled.div`
    width: 300px;
    height: 367px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const CardHeadBlock = styled.div``
export const CardHead = styled.div`
    width: 100%;
    height: 168px;
    position: relative;
`
export const CardHeadTitle = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    max-width: 128px;
    ${textOverflow}
`
export const CardTitle = styled.h2`
    font-size: 24px;
    margin: 14px 20px;
    font-weight: bold;
`
export const CardFooter = styled.div``
const CardFooterTime = styled.span`
    font-size: 16px;
`
