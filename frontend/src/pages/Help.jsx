import React from 'react'
import "../css/help.css"
const Help = () => {
    return (
        <div className = "help">
            <h1 className="help-head">Nearby Help</h1>
            <div className="help-desc">Just experienced an online fraud? Dont worry, We got your back. Check out nearest police stations, law consultants, cyber cells and contact them. </div>   
            {/*Map goes here */  }
            <div className="help-map"> </div>
            <button> Get Numbers</button>
        </div>
    )
}

export default Help
