import React, { useState } from 'react';

function SpeedConverter() {
    const [inputValue, setInputValue] = useState(1);
    const [fromUnit, setFromUnit] = useState("kilometers_per_hour");
    const [toUnit, setToUnit] = useState("miles_per_hour");
    const [result, setResult] = useState(null);

    // Updated conversion factors
    const speedUnits = {
        kilometers_per_hour: 1,
        miles_per_hour: 0.621371,
        meters_per_second: 3.6, // 1 m/s = 3.6 km/h
        feet_per_second: 1.09728, // 1 foot/s = 1.09728 km/h
        knots: 1.852, // 1 knot = 1.852 km/h
    };

    const handleConvert = () => {
        const fromFactor = speedUnits[fromUnit];
        const toFactor = speedUnits[toUnit];
        const convertedValue = (inputValue * fromFactor) / toFactor;
        setResult(convertedValue.toFixed(4));
    };

    return (
        <div className="speed-converter">
            <h2>Speed Converter</h2>
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
                        {Object.keys(speedUnits).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit.replace(/_/g, ' ')}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <label>To</label>
                    <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                        {Object.keys(speedUnits).map((unit) => (
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

export default SpeedConverter;
