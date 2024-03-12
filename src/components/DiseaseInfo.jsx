// Info.js
import './Info.css';
import { useRef } from 'react';
import { format } from 'react-string-format';

function DiseaseInfo() {
    const rocRef = useRef(null);
    const prRef = useRef(null);
    const fiRef = useRef(null);
    const shapRef = useRef(null);

    const onFormChange = () => {
        const trainValue = trainRef.current.value;
        const testValue = testRef.current.value;
        const modelValue = modelRef.current.value;
        if (trainValue != testValue) {
            document.getElementById('fi').opacity = 0;
            document.getElementById('shap').opacity = 0;
        }
        else {
            document.getElementById('fi').opacity = 1;
            document.getElementById('shap').opacity = 1;
        }
        rocRef.current.src = format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{1}/{2}/plots/roc.png', trainValue, testValue, modelValue);
        prRef.current.src = format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{1}/{2}/plots/precision-recall.png', trainValue, testValue, modelValue);
        fiRef.current.src = trainValue !== testValue ? format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{1}/{2}/plots/feature_importance.png', trainValue, testValue, modelValue) : null;
        shapRef.current.src = trainValue !== testValue ? format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{1}/{2}/plots/shap_values.png', trainValue, testValue, modelValue) : null;
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
                    <option value="0">---</option>
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
                    <img id='roc' alt='roc' ref={rocRef}/>
                </div>
                <div className="image">
                    <img id='pr' alt='precision-recall' ref={prRef}/>
                </div>
                <div className="image">
                    <img id='fi' alt='feature_importance' ref={fiRef}/>
                </div>
                <div className="image">
                    <img id='shap' alt='shap_values' ref={shapRef}/>
                </div>
            </div>
        </>
    );
}

export default DiseaseInfo;
