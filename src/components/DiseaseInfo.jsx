import './Info.css';
import {useRef} from 'react';
import {format} from 'react-string-format';
import transparent from "./../assets/transparent.png"

function DiseaseInfo() {
    const rocRef = useRef(null);
    const prRef = useRef(null);
    const fiRef = useRef(null);
    const shapRef = useRef(null);

    const onFormChange = () => {
        if ((trainRef.current.value === '0' || testRef.current.value === '0') && trainRef.current.value !== testRef.current.value) {
            if (testRef.current.value !== '0') trainRef.current.value = testRef.current.value;
            else testRef.current.value = trainRef.current.value;
        }
        const trainValue = trainRef.current.value;
        const testValue = testRef.current.value;
        const modelValue = modelRef.current.value;
        document.getElementById('roc-title').innerText = 'ROC Curve';
        document.getElementById('pr-title').innerText = 'PR Curve';
        document.getElementById('fi-title').innerText = 'Feature Importance';
        document.getElementById('shap-title').innerText = 'SHAP Values';
        rocRef.current.src = format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{1}/{2}/plots/roc.png', testValue, trainValue, modelValue);
        prRef.current.src = format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{1}/{2}/plots/precision-recall.png', testValue, trainValue, modelValue);
        if (modelValue === 'Random%20Forest' || modelValue === 'XGBoost') {
            fiRef.current.src = format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{1}/{2}/plots/feature_importance.png', testValue, trainValue, modelValue);
            document.getElementById('fi-title').innerText = 'Feature Importance';
        } else {
            fiRef.current.src = transparent;
            document.getElementById('fi-title').innerText = '';
        }
        shapRef.current.src = format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{1}/{2}/plots/shap_values.png', testValue, trainValue, modelValue);
    }

    const trainRef = useRef(null);
    const testRef = useRef(null);
    const modelRef = useRef(null);

    return (
        <>
            <div className='form'>
                <div className='select'>
                    <label htmlFor="train">Train disease</label>
                    <select id='train' onChange={onFormChange} ref={trainRef}>
                        <option value="0">---</option>
                        <option value="1">1 (MS without T2D or CAD)</option>
                        <option value="2a">2a (Severe obesity without diabetes or CAD)</option>
                        <option value="2b">2b (Eligibility for bariatric surgery)</option>
                        <option value="3">3 (T2D without CAD)</option>
                        <option value="4">4 (First acute CAD event)</option>
                        <option value="5">5 (Chronic CAD without heart failure)</option>
                        <option value="6">6 (Chronic CAD with heart failure)</option>
                        <option value="7">7 (Other non-CAD related heart failure)</option>
                    </select>
                </div>
                <div className='select'>
                    <label htmlFor="test">Test disease</label>
                    <select id='test' onChange={onFormChange} ref={testRef}>
                        <option value="0">---</option>
                        <option value="1">1 (MS without T2D or CAD)</option>
                        <option value="2a">2a (Severe obesity without diabetes or CAD)</option>
                        <option value="2b">2b (Eligibility for bariatric surgery)</option>
                        <option value="3">3 (T2D without CAD)</option>
                        <option value="4">4 (First acute CAD event)</option>
                        <option value="5">5 (Chronic CAD without heart failure)</option>
                        <option value="6">6 (Chronic CAD with heart failure)</option>
                        <option value="7">7 (Other non-CAD related heart failure)</option>
                    </select>
                </div>
                <div className='select'>
                    <label htmlFor="model">Model</label>
                    <select id='model' onChange={onFormChange} ref={modelRef}>
                        <option value="Random%20Forest">Random Forest</option>
                        <option value="XGBoost">XGBoost</option>
                        <option value="Logistic%20Regression">Logistic Regression</option>
                        <option value="SVM">Support Vector Machine</option>
                        <option value="k-NN">k-Nearest Neighbors</option>
                    </select>
                </div>
            </div>
            <div className="container">
                <div className="image">
                    <img id='roc' ref={rocRef} style={{
                        marginLeft: 50
                    }}/>
                    <h4 id='roc-title'></h4>
                </div>
                <div className="image">
                    <img id='pr' ref={prRef} style={{
                        marginLeft: 50
                    }}/>
                    <h4 id='pr-title'></h4>
                </div>
                <div className="image">
                    <img id='fi' ref={fiRef} style={{
                        width: 500,
                        height: "auto"
                    }}/>
                    <h4 id='fi-title'></h4>
                </div>
                <div className="image">
                    <img id='shap' ref={shapRef} style={{
                        width: 500,
                        height: "auto"
                    }}/>
                    <h4 id='shap-title'></h4>
                </div>
            </div>
        </>
    );
}

export default DiseaseInfo;
