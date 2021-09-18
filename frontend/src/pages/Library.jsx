import React, { Component } from 'react'
import LibCard from '../components/LibCard'

export class Library extends Component {

    getCards = ()=>{
        return (this.props.data.map((row,i)=>{
            return <LibCard key={i} data={row}/>
        }))
    }

    render() {
        return (
            <div className="library">
                <h1 className="lib-head">Fraud Library</h1>
                <div className="lib-desc">A realtime crowdsourced database of most recent frauds to keep you aware. </div>   
                <div className="lib-cards">
                    {this.getCards()}
                </div>
            </div>
        )
    }

}

export default Library

