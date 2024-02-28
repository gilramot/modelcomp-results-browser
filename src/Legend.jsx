import './Legend.css'
import { useState } from "react"

function Legend() {
    const [isActive, setIsActive] = useState(false);

    const toggleCollapsible = () => {
        setIsActive(!isActive);
    };
    return (
        <>
            <div style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "350px",
                padding: "10px",
                margin: "10px"
            }}>
                <button type='button' className={`collapsible${isActive ? ' active' : ''}`} onClick={toggleCollapsible}>Abbreviations & Disease keys</button>
                <div className={`content:${isActive ? ' active' : ''}`} style={{position:"absolute", top:"180px", left:"5px", maxWidth:"350px", maxHeight: isActive ? 'none' : '100px' }}>
                    <h3>
                        Abbreviations:
                    </h3>
                    <ul>
                        <li>RF: Random Forest</li>
                        <li>XGB: XGBoost</li>
                        <li>LR: Logistic Regression</li>
                        <li>SVM: Support Vector Machine</li>
                        <li>k-NN: k Nearest Neighbors</li>
                        <li>ROC: Receiver Operating Characteristic</li>
                        <li>AUC: Area Under the Curve</li>
                        <li>PR: Precision-Recall</li>
                    </ul>
                    <h3>Disease keys:</h3>
                    <ul>
                        <li>0 - Control group, subjects exempt from CAD, T2D or MS</li>
                        <li>1 - Subjects with MS (Metabolic syndrome) without T2D (Type 2 Diabetes) or CAD (Coronary
                            Artery
                            Disease)
                        </li>
                        <li>2a - Subjects with severe obesity without diabetes or CAD</li>
                        <li>2b - Subjects eligible for bariatric surgery</li>
                        <li>3 - Subject with T2D without CAD</li>
                        <li>4 - Subjects with a first acute CAD event</li>
                        <li>5 - Subjects suffering from chronic CAD without heart failure (left ventricular ejection
                            fraction ≥45)
                        </li>
                        <li>6 - Subjects suffering from chronic CAD with heart failure (left ventricular ejection
                            fraction &lt;45)
                        </li>
                        <li>7 - Subjects with non-CAD related heart failure</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Legend;