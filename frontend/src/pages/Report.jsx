import React, { Component } from 'react'
import { NavLink as Link } from 'react-router-dom';

export class Report extends Component {
    state = {website :"",fraudType : "" , description : ""}
    render() {
        return (
            <div className="report">
                <h1 className="report-head">Report Fraud</h1>
                <div className="report-desc">Just experienced an online fraud? Report it so that other people stay alert </div>     
                <form action="" className="report-form">
                    <label htmlFor="website">Fraudlent Website:</label>
                    <input type="text" name="website" id="website" value={this.state.website} onChange={(e=>{this.setState({website:e.target.value})})}/>
                    <label htmlFor="fraudtype">Fraudlent Website:</label>
                    <select name="fraudtype" id="fraudtype" value={this.state.fraudtype} onChange={(e=>{this.setState({fraudtype:e.target.value})})}>
                        <option value="abc">abc</option>
                        <option value="123">123</option>
                        <option value="qwe">qwe</option>
                        <option value="xzc">xzc</option>
                    </select>
                    <label htmlFor="description">Fraudlent Website:</label>
                    <input type="text" name="description" id="description" value={this.state.description} onChange={(e=>{this.setState({description:e.target.value})})}/>

                </form>
                <span className= "report-msg">If not already, we suggest you to take <Link to='/help' className="help-link">Nearby Help</Link></span>
            </div>
        )
    }
}

export default Report

