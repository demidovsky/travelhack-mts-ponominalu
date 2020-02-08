import styled from "styled-components"

export const StdButton = styled.button<{textColor?: string; bold?: boolean; color?: string}>`
    outline: none;
    display: inline-block;
    position: relative;
    appearance: none;
    background-color: ${({color}) => color || "#fff"};
    border: none;
    cursor: pointer;
    border-radius: 6px;
    font-size: 16px;
    height: 44px;
    color: ${({textColor}) => textColor || "#fff"};
    padding: 0 24px;

    ${({bold}) => bold && "font-weight: bold;"}
`
