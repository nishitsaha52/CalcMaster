import React, { useState } from 'react';

function DiscountCalculator() {
    const [originalPrice, setOriginalPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [discountedPrice, setDiscountedPrice] = useState(null);
    const [savings, setSavings] = useState(null);

    const handleCalculate = () => {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const finalPrice = originalPrice - discountAmount;
        setDiscountedPrice(finalPrice.toFixed(2));
        setSavings(discountAmount.toFixed(2));
    };

    return (
        <div className="discount-calculator">
            <h2>Discount Calculator</h2>
            <div className="calculator-form">
                <div className="input-group">
                    <label>Original Price</label>
                    <input
                        type="number"
                        value={originalPrice}
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        min="0"
                    />
                </div>
                <div className="input-group">
                    <label>Discount Percentage</label>
                    <input
                        type="number"
                        value={discountPercentage}
                        onChange={(e) => setDiscountPercentage(e.target.value)}
                        min="0"
                        max="100"
                    />
                </div>
                <button onClick={handleCalculate} className="calculate-button">Calculate</button>
                {discountedPrice !== null && savings !== null && (
                    <div className="result">
                        <p>Discounted Price: ${discountedPrice}</p>
                        <p>You Save: ${savings}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DiscountCalculator;
