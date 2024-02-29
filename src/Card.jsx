import qrcode from "./assets/qrcode.png"
import "./Card.css"
import {useState} from "react";
import Legend from "./Legend.jsx";

function Card() {
    const [isShown, setIsShown] = useState(false)
    return (
        <>
            <div className="card" style={{visibility: isShown ? 'hidden' : 'visible' }}>
                <img className="card-image" src={qrcode} alt="profile picture"></img>
                <h2 className="card-title">Check out my package on PyPI!</h2>
                <img className="minor-card-image" src="https://img.shields.io/pypi/v/modelcomp"/>
                <img className="minor-card-image" src="https://img.shields.io/github/license/gilramot/modelcomp"/>
                <img className="minor-card-image" src="https://img.shields.io/pypi/dm/modelcomp"/>
                <img className="minor-card-image" src="https://img.shields.io/pypi/pyversions/modelcomp"/>
            </div>
            <Legend onStateChange={setIsShown}/>
        </>
    )
}

export default Card
