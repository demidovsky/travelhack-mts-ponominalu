import React from "react"
import styled from "styled-components"
import axios from "axios"
import {BottomCard} from "./BottomCard"
import rave from './rave.jpg';
import rap from './rap.jpg';
import rock from './rock.jpg';
import club from './club2.jpg';

interface MyProps {
}

interface MyState {
  error: any,
  isLoaded: boolean,
  items: Array<any>
}

export class BottomCardBlock extends React.Component<MyProps, MyState> {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: Array()
    };
  }

  componentDidMount () {
    axios.get(`https://api-dev.ponominalu.ru/v4/events/list?session=123&limit=9&category_id=10`)
      .then(result => {
        console.log(result);
        const items = result.data.message;
        this.setState({ isLoaded: true, items });
      },
      error => {
        console.error(error);
        this.setState({ isLoaded: false, error });
      });

  }

  render() {
    const items = this.state.items ? this.state.items.map((item, index) => (
      <div className={ `col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-5 mt-3` } key={ (index + 1).toString() }>
        <BottomCard item={ item } />
      </div>
      )
    ) : 'loading...';

    return (
        <div className="row">
          <div className={ `col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-5 mt-3` }>
            <BottomCard item={{
              large: true,
              src: rock,
              seo: { alias: 'chayf' },
              title: 'Russian Hard Rock Experience',
              subevents: [{ min_price: 1200, date: (new Date()).toISOString().split('.')[0] }]
            }} />
          </div>
          <div className={ `col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-5 mt-3` }>
            <BottomCard item={{
              large: true,
              src: rap,
              seo: { alias: 'missio' },
              title: 'Russian Rap Battle Experience',
              subevents: [{ min_price: 1200, date: (new Date()).toISOString().split('.')[0] }]
            }} />
          </div>
          <div className={ `col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-5 mt-3` }>
            <BottomCard item={{
              large: true,
              src: rave,
              seo: { alias: 'missio' },
              title: 'Moscow Rave Underground Experience',
              subevents: [{ min_price: 1200, date: (new Date()).toISOString().split('.')[0] }]
            }} />
          </div>
          <div className={ `col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 mb-5 mt-3` }>
            <BottomCard item={{
              large: true,
              src: club,
              seo: { alias: 'missio' },
              title: 'Moscow Night Club Experience',
              subevents: [{ min_price: 1200, date: (new Date()).toISOString().split('.')[0] }]
            }} />
          </div>
          {items}
        </div>

    );
  }

}

export const BottomCardBlockWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`
