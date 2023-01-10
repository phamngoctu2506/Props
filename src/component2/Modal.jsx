import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    // console.log(this.props.shoes);
    return (
      <>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thông Tin Chi Tiết</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body p-5">
                          <p><span className="font-weight-bold text-info">Tên: </span>{this.props.shoes.name}<span></span></p>
                          <p><span className="font-weight-bold text-info">Price: <span className='text-danger'>$</span> </span>{this.props.shoes.price}</p>
                          <p><span className="font-weight-bold text-info">Mô Tả: </span>{this.props.shoes.description}</p>
                          <img src={this.props.shoes.image} alt="" style={{width: "100%"}}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
      </>
      
    )
  }
}
