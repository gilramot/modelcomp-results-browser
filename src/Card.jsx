import qrcode from "./assets/qrcode.png"
import "./Card.css"

function Card() {
    return (
        <>
            <div className="card">
                <img className="card-image" src={qrcode} alt="profile picture"></img>
                <h2 className="card-title">Check out my package on PyPI!</h2>
                <img className="minor-card-image" src="https://img.shields.io/pypi/v/modelcomp"/>
                <img className="minor-card-image" src="https://img.shields.io/github/license/gilramot/modelcomp"/>
                <img className="minor-card-image" src="https://img.shields.io/pypi/dm/modelcomp"/>
                <img className="minor-card-image" src="https://img.shields.io/pypi/pyversions/modelcomp"/>
            </div>
        </>
    )
}

export default Card
