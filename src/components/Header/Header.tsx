import * as React from "react"
import {Container, Typography} from "@material-ui/core"
import styled from "styled-components"

export const Header = () => (
    <HeaderWrapper>
        <Typography variant="h2">
            <Typography component="span" variant="h2" color="error">
                #hangout
            </Typography>
            <Typography color="white" component="span" variant="h2">
                likealocal
            </Typography>
        </Typography>
        <Typography color="white" variant="h4">Overcome language barrier through music</Typography>
    </HeaderWrapper>
)

const HeaderWrapper = styled(Container)`
    background: url("./logo.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 447px;
`
