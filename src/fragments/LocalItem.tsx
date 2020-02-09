import React, { Component } from "react"
import translit from './../utils/translit'

interface Props {
  item: any
}

interface State {
}



export default class LocalItem extends Component<Props, State>  {
  constructor (props) {
    super(props);
    console.log(props)
  }

  render() {
    const src = this.props.item.src || `https://graph.facebook.com/${this.props.item.id}/picture?type=large&width=380&height=380`
    return (
      <div className="card card-cascade d-flex flex-row mb-3" style={{minHeight:'150px'}}>
        <div className="view view-cascade overlay" style={{ flex:1 }}>
          <img className="card-img-top " src={src} alt={this.props.item.name} style={{width:'150px',height:'150px'}}/>
          <a>
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>
        <div className="card-body card-body-cascade text-left" style={{ flex:1 }}>

          <h5 className="_card-title"><strong>
            {translit(this.props.item.name.split(' ')[0])}
            <span className="float-right">{this.props.item.speak}</span></strong>
          </h5>
          <div className="indigo-text pb-2">25 years </div>
          {/*<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae.
            Facere modi sunt, quod quibusdam.
          </p>*/}

          {this.props.item.genres ? this.props.item.genres.split(',').map(g => (<span className="badge badge-pill elegant-color mr-2 mb-1">{g}</span>)) : null}
          

          {/*<a type="button" className="btn-floating btn-small btn-fb"><i className="fab fa-facebook-f"></i></a>
          &nbsp;
          <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-twitter"></i></a>
          &nbsp;
          <a type="button" className="btn-floating btn-small btn-tw"><i className="fab fa-vk"></i></a>
          &nbsp;
          <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fa fa-envelope"></i></a>*/}

        </div>

      </div>

    )
  }
}