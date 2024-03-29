import './Legend.css'
import Collapsible from 'react-collapsible';

function hideCard() {
    var cardElement = document.getElementById('card')
    cardElement.style.opacity = 0;
}

function showCard() {
    var cardElement = document.getElementById('card')
    cardElement.style.opacity = 1;
}

function Legend() {
    return (
        <>
            <div className='collapsible'>
                <Collapsible
                    trigger='Abbreviations & Disease keys&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                    triggerClassName='collapsible_closed' triggerOpenedClassName='collapsible_open'
                    onTriggerOpening={hideCard} onTriggerClosing={showCard}>
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
                </Collapsible>
            </div>
        </>
    )
}

export default Legend;