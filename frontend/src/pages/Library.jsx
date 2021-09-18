import React, { Component } from 'react'

export class Library extends Component {

    getkeys = () =>{
        return Object.keys(this.props.data[0]);
    }

    getheaders = () =>{
        let keys = this.getkeys();
        return keys.map((key,i)=>{
            return <th key={key}>{key}</th>
        })
    }

    renderRow = (row) =>{
        let keys = this.getkeys();
        return keys.map((key,i)=>{
            return <td key={row[key]}>{row[key]}</td>
        })
    }

    getrows = () =>{
        return this.props.data.map((row,i)=>{
            return (<tr key={i}>{this.renderRow(row)}</tr>)
        })
    }

    render() {
        return (
            <div className="library">
                <h1 className="lib-head">Fraud Library</h1>
                <div className="lib-desc">A realtime crowdsourced database of most recent frauds to keep you aware. </div>   
                <div className="lib-tablediv">
                    <table className="lib-table">
                        <thead>
                            <tr>
                                {this.getheaders()}
                            </tr>
                        </thead>
                        <tbody>
                            {this.getrows()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Library

