import React, { useState } from 'react';

function TemperatureConverter() {
    const [inputValue, setInputValue] = useState(0);
    const [fromUnit, setFromUnit] = useState("Celsius");
    const [toUnit, setToUnit] = useState("Fahrenheit");
    const [result, setResult] = useState(null);

    const handleConvert = () => {
        let convertedValue;
        
        // Convert input to Celsius first
        if (fromUnit === "Celsius") {
            convertedValue = inputValue;
        } else if (fromUnit === "Fahrenheit") {
            convertedValue = (inputValue - 32) * 5 / 9; // Fahrenheit to Celsius
        } else if (fromUnit === "Kelvin") {
            convertedValue = inputValue - 273.15; // Kelvin to Celsius
        }

        // Convert Celsius to the target unit
        if (toUnit === "Celsius") {
            setResult(convertedValue.toFixed(2));
        } else if (toUnit === "Fahrenheit") {
            setResult((convertedValue * 9 / 5 + 32).toFixed(2)); // Celsius to Fahrenheit
        } else if (toUnit === "Kelvin") {
            setResult((convertedValue + 273.15).toFixed(2)); // Celsius to Kelvin
        }
    };

    return (
        <div className="temperature-converter">
            <h2>Temperature Converter</h2>
            <div className="converter-form">
                <div className="input-group">
                    <label>Value</label>
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label>From</label>
                    <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
                    </select>
                </div>
                <div className="input-group">
                    <label>To</label>
                    <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                        <option value="Celsius">Celsius</option>
                        <option value="Fahrenheit">Fahrenheit</option>
                        <option value="Kelvin">Kelvin</option>
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

export default TemperatureConverter;
