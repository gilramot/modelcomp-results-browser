import './Card.css'
import {useState} from 'react';
import Legend from './Legend.jsx';
import QRCode from 'react-qr-code';
function Card() {
    const [isShown, setIsShown] = useState(false)
    return (
        <>
            <div id='card' className='card' style={{visibility: isShown ? 'hidden' : 'visible'}}>
                <QRCode bgColor='#1a1a1a' fgColor='#a1a1a1' value='https://pypi.org/project/modelcomp/' className='card-image'/>
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
