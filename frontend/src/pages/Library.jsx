import React, { Component } from 'react'
import LibCard from '../components/LibCard'
import Modal from '../components/Modal';

export class Library extends Component {

    state = {showModal:false, ModalData:0};

    onModalClose = ()=>{
        this.setState({showModal:false});
    }

    openModal = (x)=>{
        this.setState({ModalData:x,showModal:true});
    }

    getCards = ()=>{
        return (this.props.data.map((row,i)=>{
            return <LibCard key={i} data={row} index={i} modal={this.openModal}/>
        }))
    }

    render() {
        const dataSent = (this.props.data[this.state.ModalData]);
        return (
            <div className="library">
                <h1 className="lib-head">Fraud Library</h1>
                <div className="lib-desc">A realtime crowdsourced database of most recent frauds to keep you aware. </div>   
                <div className="lib-cards">
                    {this.getCards()}
                </div>
                <Modal data={dataSent} show={this.state.showModal} closeModal={this.onModalClose}/>
            </div>
        )
    }

}

export default Library

