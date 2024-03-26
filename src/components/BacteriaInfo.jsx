import Select from "react-select";
import { useState } from "react";
import './Info.css'
import Papa from 'papaparse';


function BacteriaInfo() {
    var csvfile = "../assets/appendix/export/A/A/XGBoost/data/shap_values.csv";
    const columnNames = Papa.parse(csvfile[0], {
            header: true,
            skipEmptyLines: true,
        })
    const customStyles = {
        control: (provided) => ({
            ...provided,
            background: '#f0f0f0',
            borderColor: '#343434',
            display: 'flex',
            flexWrap: 'nowrap',
            width: '20em',
            color: '#333333',
        }),
        menu: (provided) => ({
            ...provided,
            background: '#ffffff',
            width: '100%',
            zIndex: 9999,
        }),
        option: (provided, state) => ({
            ...provided,
            background: state.isSelected ? '#1a1aa1' : '#ffffff',
            color: state.isSelected ? '#ffffff' : '#333333',
            '&:hover': {
                background: state.isSelected ? '#1a1aa1' : '#f0f0f0',
                color: state.isSelected ? '#ffffff' : '#333333',
            },
        }),
    };

    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
            <div className='bacteria-info-container'>
                <Select
                    placeholder='Select a bacteria...'
                    styles={customStyles}
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={columnNames}
                />
            </div>
        </>
    );
}

export default BacteriaInfo;
