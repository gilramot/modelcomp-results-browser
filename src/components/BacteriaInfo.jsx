import Select from "react-select";
import { useState } from "react";

const options = [
    { value: "blues", label: "Blues" },
    { value: "rock", label: "Rock" },
    { value: "jazz", label: "Jazz" },
    { value: "orchestra", label: "Orchestra" },
];

function BacteriaInfo() {
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
        <div>
            <Select
                styles={customStyles}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
            />
        </div>
    );
}

export default BacteriaInfo;
