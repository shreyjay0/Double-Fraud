import React, { Component } from 'react'
import "../css/modal.css"

export class Modal extends Component {


    render() {
        if(this.props.show){
        return (
            <div className="modal">
                <div className="modal-container">
                    <h1 className="modal-head">{this.props.data.title}</h1>
                    <button className="modal-btn" onClick={this.props.closeModal}>X</button>
                    <div className="modal-website"><span className="website-text">Website: &nbsp;&nbsp; </span><a href={this.props.data.website} className="website">{this.props.data.website}</a></div>
                    <div className="modal-fraudType"><span className="fraudType-text">Type of Fraud:  &nbsp;&nbsp;</span><span className="fraudType">{this.props.data.fraudType}</span></div>
                    <div className="modal-desc"><span className="desc-text">Description: </span><br /><span className="desc">{this.props.data.description}</span></div>
                </div>
            </div>
        )}else{
            return null
        }
    }
}

export default Modal
