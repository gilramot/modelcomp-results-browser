import Select from "react-select";
import {useEffect, useState} from "react";
import './Info.css';
import { readRemoteFile } from "react-papaparse";
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
        const [selectedOption, setSelectedOption] = useState(null),
        models = ['XGBoost', 'Random Forest', 'Logistic Regression', 'SVM'],
        diseases = ['A', '1', '2a', '2b', '3', '4', '5', '6', '7'], explainers = ['feature_importance, shap_values'],
        handleChange = (e) => {
            setSelectedOption(e.value);
            onFormChange();
        };
        const onFormChange = async () => {
            for (const i of models) {
                for (const j of diseases) {
                    for (const k of explainers) {
                        if (k === 'feature_importance' && i === 'k-NN') continue;
                        await new Promise(resolve, reject) => {
                            readRemoteFile(
                                format('https://raw.githubusercontent.com/gilramot/modelcomp-appendix/main/export/{0}/{0}/{1}/data/{2}.csv', j, i, k),
                                {
                                    complete: (results) => {
                                        const parsedData = results.data.slice(1).map(row => ({
                                            label: row[0],
                                            value: parseFloat(row[1]),
                                        })).sort((a, b) => b.value - a.value);
                                        let returnVal = null;
                                        parsedData.forEach(row => {
                                            if (selectedOption === row.label) {
                                                returnVal = row;
                                                return;
                                            }
                                        });
                                        var t = document.createElement("td");
                                        t.innerText = returnVal;
                                        document.getElementById(j).parentElement.insertAfter(t, document.getElementById(j));
                                    }
                                }
                            )
                                if (reject) {
                                    console.log('error');
                                }
                        }
                    }
                }
            }
        }

    return (
        <div>
            <div className='bacteria-info-container'>
                <Select
                    placeholder='Select a bacteria...'
                    styles={customStyles}
                    defaultValue={selectedOption}
                    onChange={handleChange}
                    options={columnNames}
                    value={selectedOption}
                />
            </div>
            <table style={{
                marginLeft: '400px',
                marginTop: '200px'
            }}>
                <tbody>
                <tr>
                    <th style={{
                        border: 'none'
                    }}></th>
                    <th colSpan='300'>XGBoost</th>
                    <th colSpan='300'>Random Forest</th>
                    <th colSpan='300'>Logistic Regression</th>
                    <th colSpan='300'>SVM</th>
                    <th colSpan='300'>k-NN</th>
                </tr>
                <tr>
                    <th style={{
                        border: 'none'
                    }}></th>
                    <th colSpan='150'>FI</th>
                    <th colSpan='150'>SHAP</th>
                    <th colSpan='150'>FI</th>
                    <th colSpan='150'>SHAP</th>
                    <th colSpan='150'>FI</th>
                    <th colSpan='150'>SHAP</th>
                    <th colSpan='150'>FI</th>
                    <th colSpan='150'>SHAP</th>
                    <th colSpan='300'>SHAP</th>
                </tr>
                <tr>
                    <th id='A'>All Diseases</th>
                </tr>
                <tr>
                    <th id='1'>1</th>
                </tr>
                <tr>
                    <th id='2a'>2a</th>
                </tr>
                <tr>
                    <th id='2b'>2b</th>
                </tr>
                <tr>
                    <th id='3'>3</th>
                </tr>
                <tr>
                    <th id='4'>4</th>
                </tr>
                <tr>
                    <th id='5'>5</th>
                </tr>
                <tr>
                    <th id='6'>6</th>
                </tr>
                <tr>
                    <th id='7'>7</th>
                </tr>
                <tr>
                    <th colSpan='500px' style={{border: 'none'}}>
                        Position (out of 313) <br/>
                        LOWER = BETTER
                    </th>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default BacteriaInfo;
