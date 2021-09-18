import React from 'react'
import "../css/webscan.css"
const Webscan = () => {
    return (
        <div className= "webscan">
            <h1 className="webscan-head">Website Scan</h1>
            <div className="webscan-desc">If they are trying to fraud you, We will fraud them! </div>   
            <br />
            <form action="post">
                <input type="text" className="yourinput" />
            </form>
        </div>
    )
}

export default Webscan
