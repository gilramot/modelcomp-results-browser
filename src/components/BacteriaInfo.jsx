import Select from "react-select";
import {useRef, useState} from "react";
import './Info.css';
import { readRemoteFile } from "react-papaparse";
import Papa from 'papaparse';
import {format} from "react-string-format";
function BacteriaInfo() {
    const [columnNames, setColumnNames] = useState([]);
    readRemoteFile(
        'https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/A/A/XGBoost/data/shap_values.csv',
        {
            complete: (results) => {
                const parsedData = results.data.map(row => ({
                    label: row[0], // Taking the first value of each row
                    value: row[0], // Taking the first value of each row
                }))
                setColumnNames(parsedData.slice(1));
            }
        }
    );

    const customStyles = {
        control: (provided) => ({
            ...provided,
            background: '#ffffff',
            borderColor: '#333333',
            display: 'flex',
            flexWrap: 'nowrap',
            width: '20em',
            color: '#ffffff',
        }),
        menu: (provided) => ({
            ...provided,
            background: '#333333',
            width: '100%',
            zIndex: 9999,
        }),
        option: (provided, state) => ({
            ...provided,
            background: state.isSelected ? '#a1a1a1' : '#333333',
            color: state.isSelected ? '#333333' : '#ffffff',
            '&:hover': {
                background: state.isSelected ? '#a1a1a1' : '#0f0f0f',
                color: state.isSelected ? '#333333' : '#ffffff',
            },
        }),
    };
    const models = ['XGB', 'RF', 'LR', 'SVM', 'k-NN'];
    const [fiXGBcsv, setfiXGBcsv] = useState(null);
    const [fiRFcsv, setfiRFcsv] = useState(null);
    const [fiLRcsv, setfiLRcsv] = useState(null);
    const [fiSVMcsv, setfiSVMcsv] = useState(null);
    const [fiKNNcsv, setfiKNNcsv] = useState(null);
    const [shapXGBcsv, setshapXGBcsv] = useState(null);
    const [shapRFcsv, setshapRFcsv] = useState(null);
    const [shapLRcsv, setshapLRcsv] = useState(null);
    const [shapSVMcsv, setshapSVMcsv] = useState(null);
    const [shapKNNcsv, setshapKNNcsv] = useState(null);
    const onFormChange = () => {
        if ((trainRef.current.value === '0' || testRef.current.value === '0') && trainRef.current.value !== testRef.current.value) {
            if (testRef.current.value!=='0') trainRef.current.value = testRef.current.value;
            else testRef.current.value = trainRef.current.value;
        }
        readRemoteFile(
            format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{1}/XGBoost/data/shap_values.csv', trainRef.current.value, testRef.current.value),
            {
                complete: (results) => {
                    const parsedData = results.data.slice(1).map(row => ({
                        label: row[0], // Taking the first value of each row
                        value: row[0], // Taking the first value of each row
                    })).sort((a) => {
                        parseInt(a.value);
                    });
                    var returnVal = null;
                    parsedData.data.forEach(row => {
                        if (selectedOption in row) {
                            returnVal = row;
                            return;
                        }
                    });
                    setfiXGBcsv(returnVal);
                }
            }
        );
    }
    const trainRef = useRef(null);
    const testRef = useRef(null);

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className='bacteria-info-container'>
            <Select
                placeholder='Select a bacteria...'
                styles={customStyles}
                defaultValue={selectedOption}
                onChange={(e) => {setSelectedOption(e); onFormChange()}}
                options={columnNames}
            />
            <div className='select-bacteria'>
                <label htmlFor="train">Train disease</label>
                <br/>
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
            <div className='select-bacteria'>
                <label htmlFor="test">Test disease</label>
                <br/>
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
            <table>
                <tr>
                    <th style={{
                        border: 'none'
                    }}></th>
                    <th>XGBoost</th>
                    <th>Random Forest</th>
                    <th>Logistic Regression</th>
                    <th>SVM</th>
                    <th>k-NN</th>
                </tr>
                <tr>
                    <th>Feature Importance</th>
                    <td>{fiXGBcsv}</td>
                    <td>{fiRFcsv}</td>
                    <td>{fiLRcsv}</td>
                    <td>{fiSVMcsv}</td>
                    <td>{fiKNNcsv}</td>
                </tr>
                <tr>
                    <th>SHAP</th>
                    <td>{shapXGBcsv}</td>
                    <td>{shapRFcsv}</td>
                    <td>{shapLRcsv}</td>
                    <td>{shapSVMcsv}</td>
                    <td>{shapKNNcsv}</td>
                </tr>
            </table>
            Position (out of 312) <br/>
            LOWER = BETTER
        </div>
    );
}

export default BacteriaInfo;
