import React, { useState } from 'react';

function LengthConverter() {
    const [inputValue, setInputValue] = useState(1);
    const [fromUnit, setFromUnit] = useState("meters");
    const [toUnit, setToUnit] = useState("kilometers");
    const [result, setResult] = useState(null);

    const lengthUnits = {
        meters: 1,
        kilometers: 1000,
        centimeters: 0.01,
        millimeters: 0.001,
        miles: 1609.344,
        yards: 0.9144,
        feet: 0.3048,
        inches: 0.0254
    };

    const handleConvert = () => {
        const fromFactor = lengthUnits[fromUnit];
        const toFactor = lengthUnits[toUnit];
        const convertedValue = (inputValue * fromFactor) / toFactor;
        setResult(convertedValue.toFixed(4));
    };

    return (
        <div className="length-converter">
            <h2>Length Converter</h2>
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
                        {Object.keys(lengthUnits).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <label>To</label>
                    <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                        {Object.keys(lengthUnits).map((unit) => (
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

export default LengthConverter;
