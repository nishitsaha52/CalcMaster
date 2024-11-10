import React, { useState } from 'react';

function GSTCalculator() {
    const [amount, setAmount] = useState(0);
    const [gstRate, setGstRate] = useState(18); // Default GST rate in percentage
    const [totalAmount, setTotalAmount] = useState(null);
    const [gstAmount, setGstAmount] = useState(null);

    const calculateGST = () => {
        const calculatedGst = (amount * gstRate) / 100;
        const calculatedTotal = parseFloat(amount) + calculatedGst;
        setGstAmount(calculatedGst.toFixed(2));
        setTotalAmount(calculatedTotal.toFixed(2));
    };

    return (
        <div className="gst-calculator">
            <h2>GST Calculator</h2>
            <div className="calculator-form">
                <div className="input-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0"
                    />
                </div>
                <div className="input-group">
                    <label>GST Rate (%)</label>
                    <input
                        type="number"
                        value={gstRate}
                        onChange={(e) => setGstRate(e.target.value)}
                        min="0"
                    />
                </div>
                <button onClick={calculateGST} className="calculate-button">Calculate GST</button>
                {gstAmount !== null && totalAmount !== null && (
                    <div className="result">
                        <p>GST Amount: ₹{gstAmount}</p>
                        <p>Total Amount (including GST): ₹{totalAmount}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GSTCalculator;
