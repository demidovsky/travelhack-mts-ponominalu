import React from "react"
import {Map} from "./components/Map/Map"
import "./index.css"
import {AppHeader} from "./fragments/AppHeader"
import styled from "styled-components"
import {BottomCardBlock} from "./fragments/BottomCardBlock"

const App = () => {
    return (
        <AppWrapper>
            <AppHeader />
            <Map width="100%" height="327px" />
            <BottomCardBlock />
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export default App
