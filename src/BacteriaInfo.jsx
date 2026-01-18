import Select from 'react-select';
import { useRef, useState } from 'react';
import './Info.css';
import { format } from 'react-string-format';
import colorbar from './../assets/colorbar.png';
import {readRemoteFile} from 'react-papaparse';
export default function BacteriaInfo() {
    const [columnNames, setColumnNames] = useState([]);
    readRemoteFile(
        '/modelcomp-appendix/results/v0.0.1a1/export/A/A/XGBoost/data/shap_values.csv',
        {
            complete: (results) => {
                const parsedData = results.data.slice(1).map((row) => ({
                    label: row[0],
                    value: row[0],
                })).sort((a, b) => a.value.localeCompare(b.value));
                setColumnNames(parsedData.slice(1));
            }
        },
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
    var selectedOption = null;
    const models = ['XGBoost', 'Random Forest', 'Logistic Regression', 'SVM', 'k-NN'];
    const diseases = ['A', '1', '2a', '2b', '3', '4', '5', '6', '7'];
    const explainers = ['feature_importance', 'shap_values'];
    const selectRef = useRef(null);

    const handleChange = (e) => {
        selectedOption = e.value;
        document.querySelectorAll('td.additional-cell').forEach((cell) => {
            cell.parentNode.removeChild(cell);
        });
        onFormChange();
    };
    const onFormChange = () => {
        for (const i of models) {
            for (const j of diseases) {
                for (const k of explainers) {
                    if (k === 'feature_importance' && (i === 'k-NN' || i === 'SVM' || i === 'Logistic Regression'))
                        continue;
                    readRemoteFile(
                        format(
                            '/modelcomp-appendix/results/v0.0.1a1/export/{0}/{0}/{1}/data/{2}.csv',
                            j,
                            i,
                            k
                        ),
                        {
                            complete: (results) => {
                                const parsedData = results.data
                                    .slice(1)
                                    .map((row) => ({
                                        label: row[0],
                                        value: parseFloat(row[1]),
                                    }))
                                    .sort((a, b) => b.value - a.value);
                                let returnVal = '';
                                parsedData.forEach(function callback(row, index) {
                                    if (selectedOption === row.label) {
                                        returnVal = index + 1;
                                        return;
                                    }
                                });
                                var t = document.createElement('td');
                                t.className = 'additional-cell';
                                t.innerText = format('{0}/{1}', returnVal, parsedData.length);
                                t.colSpan = 250;

                                const colorRatio = returnVal / parsedData.length;
                                const blue = Math.round(255 * (1 - colorRatio));
                                const red = Math.round(255 * colorRatio);
                                t.style.color = 'white';
                                t.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
                                t.style.textAlign = 'center';
                                document.getElementById(j).parentNode.appendChild(t);
                            },
                        }
                    );
                }
            }
        }
    };
    return (
        <>
            <div className='bacteria-info-container'>
                <Select
                    ref={selectRef}
                    placeholder='Select bacteria...'
                    styles={customStyles}
                    defaultValue={selectedOption}
                    onChange={(e) => handleChange(e)}
                    options={columnNames}
                />
            </div>
            <div style={{display: 'flex'}}>
                <img
                    src={colorbar}
                    style={{
                        height: '800px',
                        marginLeft: '150px',
                        marginTop: '200px',
                    }}
                    alt='Color bar'
                />
                <table style={{marginLeft: '100px', marginTop: '100px'}}>
                    <tbody>
                    <tr>
                        <th style={{border: 'none'}}></th>
                        <th colSpan='500'>XGBoost</th>
                        <th colSpan='500'>Random Forest</th>
                        <th colSpan='250'>Logistic Regression</th>
                        <th colSpan='250'>SVM</th>
                        <th colSpan='250'>k-NN</th>
                    </tr>
                    <tr>
                        <th style={{border: 'none'}}></th>
                        <th colSpan='250'>FI</th>
                        <th colSpan='250'>SHAP</th>
                        <th colSpan='250'>FI</th>
                        <th colSpan='250'>SHAP</th>
                        <th colSpan='250'>SHAP</th>
                        <th colSpan='250'>SHAP</th>
                        <th colSpan='250'>SHAP</th>
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
                    </tbody>
                </table>
            </div>
        </>
    )
}