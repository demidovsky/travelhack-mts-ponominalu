import {
    Card,
    CardHeadBlock,
    CardHead,
    CardHeadTitle,
    CardTitle,
    CardFooter,
    CardFooterLine,
    CardFooterText,
    CardPrice,
} from "../components/Card/Card"

import React from "react"

export const BottomCard = () => (
    <Card>
        <CardHeadBlock>
            <CardHead>
                <CardHeadTitle>Synthwave</CardHeadTitle>
            </CardHead>
            <CardTitle>Synth offender</CardTitle>
        </CardHeadBlock>
        <CardFooter>
            <CardFooterLine>
                <CardFooterText>Today 23:00 - 03:00</CardFooterText>
                <CardPrice>1500 RUB</CardPrice>
            </CardFooterLine>
            <CardFooterLine>
                <CardFooterText>33 Looking for company</CardFooterText>
            </CardFooterLine>
        </CardFooter>
    </Card>
)
