import React, { Component } from "react"
import {StdButton} from "../components/Button/Button"
import axios from "axios"
import LocalItem from "./LocalItem"
import maria from './maria.jpg'
import nikita from './nikita.jpg'

interface MyProps {
}

interface MyState {
  error: any,
  isLoaded: boolean,
  items: Array<any>
}


export default class Locals extends Component<MyProps, MyState>  {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: Array()
    };
  }

  componentDidMount () {
    axios.get(`https://api.backendless.com/5491463D-49B2-248C-FF2E-E755E025FF00/9BD34E37-604C-44CD-80E2-F1F76DC6D66F/data/Users`)
      .then(result => {
        const items = [
        { name: 'Nikita Ivanov', src: nikita, genres: 'Hip-Hop,Chillout', speak:'🇺🇸 🇩🇪' },
        { name: 'Maria Petrova', src: maria, genres: 'Alternative,Punk', speak: '🇺🇸 🇮🇹' },
        ].concat(result.data);

        this.setState({ isLoaded: true, items: items });

        console.log(result);
      },
      error => { this.setState({ isLoaded: false, error }); });
  }

  render() {
    const items = this.state.items ? this.state.items.map((item, index) => (
      <div className={ `col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4' : '' }` } key={ (index + 1).toString() }>
        <LocalItem item={ item } />
      </div>
      )
    ) : 'loading...';

    return (
      <div className="container mb-5">
        <h2 className="text-white mb-5" style={{ marginTop: -150, position: 'relative' }}>Looking for a concert right now:</h2>
        <div className="row">
          {items}
        </div>
      </div>

    );
  }
}
