import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    // Handle input for basic buttons
    const handleInput = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    // Clear the input and result
    const handleClear = () => {
        setInput("");
        setResult("");
    };

    // Delete the last character
    const handleBackspace = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    // Evaluate the input expression
    const handleCalculate = () => {
        try {
            const evaluatedResult = eval(input); // Note: eval can be risky; only use in a controlled environment
            setResult(evaluatedResult);
        } catch {
            setResult("Error");
        }
    };

    // Handle advanced operations
    const handleSquareRoot = () => {
        try {
            const value = Math.sqrt(parseFloat(input));
            setResult(value);
            setInput(value.toString());
        } catch {
            setResult("Error");
        }
    };

    const handleSquare = () => {
        try {
            const value = Math.pow(parseFloat(input), 2);
            setResult(value);
            setInput(value.toString());
        } catch {
            setResult("Error");
        }
    };

    const handleExponent = () => {
        setInput((prevInput) => prevInput + "**");
    };

    const handlePercentage = () => {
        try {
            const value = parseFloat(input) / 100;
            setResult(value);
            setInput(value.toString());
        } catch {
            setResult("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" value={input} readOnly />
                <div className="result">= {result}</div>
            </div>
            <div className="buttons">
                <button onClick={handleClear} className="clear">C</button>
                <button onClick={handleBackspace}>&larr;</button>
                <button onClick={() => handleInput('/')}>&divide;</button>
                <button onClick={() => handleInput('*')}>&times;</button>

                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('-')}>&minus;</button>

                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('+')}>&#43;</button>

                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={handleSquare}>x²</button>

                <button onClick={() => handleInput('0')}>0</button>
                <button onClick={() => handleInput('.')}>.</button>
                <button onClick={handleExponent}>xʸ</button>
                <button onClick={handleCalculate}>=</button>

                <button onClick={handleSquareRoot}>√</button>
                <button onClick={handlePercentage}>%</button>
            </div>
        </div>
    );
}

export default Calculator;
