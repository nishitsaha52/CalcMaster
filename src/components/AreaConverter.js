import React, { useState } from 'react';

function AreaConverter() {
    const [inputValue, setInputValue] = useState(1);
    const [fromUnit, setFromUnit] = useState("square_meters");
    const [toUnit, setToUnit] = useState("square_kilometers");
    const [result, setResult] = useState(null);

    const areaUnits = {
        square_meters: 1,
        square_kilometers: 1_000_000,
        square_centimeters: 0.0001,
        square_millimeters: 0.000001,
        square_miles: 2_589_988.11,
        square_yards: 0.836127,
        square_feet: 0.092903,
        square_inches: 0.00064516,
        acres: 4046.8564224,
        hectares: 10_000
    };

    const handleConvert = () => {
        const fromFactor = areaUnits[fromUnit];
        const toFactor = areaUnits[toUnit];
        const convertedValue = (inputValue * fromFactor) / toFactor;
        setResult(convertedValue.toFixed(6));
    };

    return (
        <div className="area-converter">
            <h2>Area Converter</h2>
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
                        {Object.keys(areaUnits).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit.replace(/_/g, ' ')}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <label>To</label>
                    <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                        {Object.keys(areaUnits).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit.replace(/_/g, ' ')}
                            </option>
                        ))}
                    </select>
                </div>
                <button onClick={handleConvert} className="convert-button">Convert</button>
                {result !== null && (
                    <div className="result">
                        <p>
                            {inputValue} {fromUnit.replace(/_/g, ' ')} = {result} {toUnit.replace(/_/g, ' ')}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AreaConverter;
