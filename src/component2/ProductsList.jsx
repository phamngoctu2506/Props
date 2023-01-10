import React, { Component } from 'react'

export default class ProductsList extends Component {
  render() {
    // console.log(this.props.shoes);
    return (
      <div className="col-3" key={this.props.shoes.id}>
        <div className="card w-75">
          <div href="#" data-toggle="modal" data-target="#exampleModal" style={{cursor: "pointer"}} onClick={() => {this.props.setModal(this.props.shoes);}}>
                        <img src={this.props.shoes.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{this.props.shoes.name}</h5>
              <p className="card-text">${this.props.shoes.price.toLocaleString()}</p>
            </div>
          </div>
        </div>
              <a href="#" className="btn btn-primary my-3">Add to cart</a>
      </div>
    )
  }
}
