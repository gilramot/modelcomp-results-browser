import './Card.css'
import {useState} from 'react';
import Legend from './Legend.jsx';
import QRCode from 'react-qr-code';
function Card() {
    const [isShown, setIsShown] = useState(false)
    return (
        <>
            <div style={{
                position: "fixed",
                left: 20,
		top: 325,
                visibility: isShown ? 'hidden' : 'visible'
            }}>
                <span className="big-number">313</span>
                <span className="small-text">used features (1938 total)</span>
                <br/>
                <span className="big-number">1818</span>
                <span className="small-text">samples</span>
	    	<br/>
	    	<span className="big-number">5</span>
	    	<span className="small-text">models</span>
	    	<br/>
	    	<span className="big-number">2</span>
	    	<span className="small-text">validation methods</span>
	    	<br/>
	    	<span className="big-number">2</span>
	    	<span className="small-text">explainers</span>
            </div>
            <div id='card' className='card' style={{visibility: isShown ? 'hidden' : 'visible'}}>
            <QRCode bgColor='#1a1a1a' fgColor='#a1a1a1' value='https://pypi.org/project/modelcomp/'
                        className='card-image'/>
                <h2 className='card-title'>Check out modelcomp on PyPI!</h2>
                <img className='minor-card-image' src='https://img.shields.io/pypi/v/modelcomp'/>
                <img className='minor-card-image' src='https://img.shields.io/github/license/gilramot/modelcomp'/>
                <img className='minor-card-image' src='https://img.shields.io/pypi/dm/modelcomp'/>
                <img className='minor-card-image' src='https://img.shields.io/pypi/pyversions/modelcomp'/>
            </div>
            <Legend onStateChange={setIsShown}/>
        </>
    )
}

export default Card
