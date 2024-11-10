import React, { useState } from 'react';

function DataConverter() {
    const [inputValue, setInputValue] = useState(1);
    const [fromUnit, setFromUnit] = useState("bytes");
    const [toUnit, setToUnit] = useState("kilobytes");
    const [result, setResult] = useState(null);

    // Updated conversion factors based on the binary system
    const dataUnits = {
        bytes: 1,
        kilobytes: 1024,
        megabytes: 1024 ** 2,
        gigabytes: 1024 ** 3,
        terabytes: 1024 ** 4,
        petabytes: 1024 ** 5,
    };

    const handleConvert = () => {
        const fromFactor = dataUnits[fromUnit];
        const toFactor = dataUnits[toUnit];
        const convertedValue = (inputValue * fromFactor) / toFactor;
        setResult(convertedValue.toFixed(4));
    };

    return (
        <div className="data-converter">
            <h2>Data Converter</h2>
            <div className="converter-form">
                <div className="input-group">
                    <label>Value</label>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        min="0"
                    />
                </div>
                <div className="input-group">
                    <label>From</label>
                    <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                        {Object.keys(dataUnits).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <label>To</label>
                    <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                        {Object.keys(dataUnits).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={handleConvert} className="convert-button">Convert</button>
                {result !== null && (
                    <div className="result">
                        <p>
                            {inputValue} {fromUnit} = {result} {toUnit}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DataConverter;
