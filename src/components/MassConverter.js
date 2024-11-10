import React, { useState } from 'react';

function MassConverter() {
    const [inputValue, setInputValue] = useState(1);
    const [fromUnit, setFromUnit] = useState("grams");
    const [toUnit, setToUnit] = useState("kilograms");
    const [result, setResult] = useState(null);

    const massUnits = {
        grams: 1,
        kilograms: 1000,
        milligrams: 0.001,
        pounds: 453.592,
        ounces: 28.3495,
        tons: 1_000_000
    };

    const handleConvert = () => {
        const fromFactor = massUnits[fromUnit];
        const toFactor = massUnits[toUnit];
        const convertedValue = (inputValue * fromFactor) / toFactor;
        setResult(convertedValue.toFixed(4));
    };

    return (
        <div className="mass-converter">
            <h2>Mass Converter</h2>
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
                        {Object.keys(massUnits).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <label>To</label>
                    <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                        {Object.keys(massUnits).map((unit) => (
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

export default MassConverter;
