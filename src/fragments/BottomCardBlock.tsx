import React from "react"
import styled from "styled-components"
import {BottomCard} from "./BottomCard"

export class BottomCardBlock extends React.Component {
    render() {
        return (

        <div className="row features-small mt-4 wow fadeIn">

          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <BottomCard />
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <BottomCard />
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 col-12">
            <BottomCard />
          </div>

        </div>
        )
    }
}

export const BottomCardBlockWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`
