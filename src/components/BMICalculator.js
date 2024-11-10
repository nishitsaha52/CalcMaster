import React, { useState } from 'react';

function BMICalculator() {
    const [weight, setWeight] = useState(70); // Default weight in kg
    const [height, setHeight] = useState(1.75); // Default height in meters
    const [unit, setUnit] = useState('metric'); // 'metric' or 'imperial'
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');

    const calculateBMI = () => {
        let calculatedBMI;

        const parsedWeight = parseFloat(weight);
        const parsedHeight = parseFloat(height);

        // Avoid calculating if height or weight is invalid
        if (!parsedWeight || !parsedHeight || parsedHeight <= 0) {
            setBmi(null);
            setCategory('Invalid input');
            return;
        }

        if (unit === 'metric') {
            calculatedBMI = parsedWeight / (parsedHeight * parsedHeight);
        } else {
            // Convert weight to kg and height to meters for imperial system
            const weightInKg = parsedWeight * 0.453592; // Pounds to kg
            const heightInM = parsedHeight * 0.0254; // Inches to meters
            calculatedBMI = weightInKg / (heightInM * heightInM);
        }

        setBmi(calculatedBMI.toFixed(2));
        setCategory(getBMICategory(calculatedBMI));
    };

    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
        if (bmi >= 25 && bmi < 29.9) return 'Overweight';
        return 'Obesity';
    };

    return (
        <div className="bmi-calculator">
            <h2>BMI Calculator</h2>
            <div className="calculator-form">
                <div className="input-group">
                    <label>Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                    <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        min="0"
                    />
                </div>
                <div className="input-group">
                    <label>Height ({unit === 'metric' ? 'm' : 'inches'})</label>
                    <input
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        min="0"
                    />
                </div>
                <div className="unit-toggle">
                    <label>
                        <input
                            type="radio"
                            value="metric"
                            checked={unit === 'metric'}
                            onChange={() => setUnit('metric')}
                        />
                        Metric
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="imperial"
                            checked={unit === 'imperial'}
                            onChange={() => setUnit('imperial')}
                        />
                        Imperial
                    </label>
                </div>
                <button onClick={calculateBMI} className="calculate-button">Calculate BMI</button>
                {bmi && (
                    <div className="result">
                        <p>Your BMI: {bmi}</p>
                        <p>Category: {category}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BMICalculator;
