import React from "react"
import {Map} from "./components/Map/Map"
import "./index.css"
import styled from "styled-components"

const App = () => {
    return (
        <AppWrapper>
            <Map />
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
`

export default App
