import React, { Component } from 'react';
import "../css/libcard.css"

export class LibCard extends Component {
    render() {
        return (
            <div className="libcard">
                <h1 className="libcard-head">{this.props.data.title}</h1>
                <a href={this.props.data.website}>{this.props.data.website}</a>
                <div className="libcard-type"><span className="type-text">TYPE</span><span className="type">{this.props.data.fraudType}</span></div>
                <div className="libcard-desc">{this.props.data.description}</div>
                <button className="readmore-btn">Read More..</button>
            </div>
        )
    }
}

export default LibCard
