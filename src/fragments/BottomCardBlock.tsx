import React from "react"
import styled from "styled-components"
import {BottomCard} from "./BottomCard"

export class BottomCardBlock extends React.Component {
    render() {
        return (
            <BottomCardBlockWrapper>
                <BottomCard />
                <BottomCard />
                <BottomCard />
            </BottomCardBlockWrapper>
        )
    }
}

export const BottomCardBlockWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`
