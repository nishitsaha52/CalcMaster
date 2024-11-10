import React, { useState, useEffect } from 'react';

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [baseCurrency, setBaseCurrency] = useState("USD");
    const [targetCurrency, setTargetCurrency] = useState("EUR");
    const [currencies, setCurrencies] = useState([]);
    const [exchangeRate, setExchangeRate] = useState(null);
    const [result, setResult] = useState(null);

    const API_KEY = process.env.REACT_APP_EXCHANGE_API_KEY; // Access the API key from environment variables
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

    useEffect(() => {
        // Fetch the list of currencies and set default exchange rate
        fetchCurrencies();
        fetchExchangeRate(baseCurrency, targetCurrency);
    }, [baseCurrency, targetCurrency]);

    const fetchCurrencies = async () => {
        try {
            const response = await fetch(`${API_URL}USD`); // Using USD as base for getting currency list
            const data = await response.json();
            setCurrencies(Object.keys(data.conversion_rates));
        } catch (error) {
            console.error("Error fetching currencies:", error);
        }
    };

    const fetchExchangeRate = async (base, target) => {
        try {
            const response = await fetch(`${API_URL}${base}`);
            const data = await response.json();
            const rate = data.conversion_rates[target];
            setExchangeRate(rate);
            setResult((amount * rate).toFixed(2));
        } catch (error) {
            console.error("Error fetching exchange rate:", error);
        }
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
        if (exchangeRate) {
            setResult((e.target.value * exchangeRate).toFixed(2));
        }
    };

    const handleBaseCurrencyChange = (e) => {
        setBaseCurrency(e.target.value);
    };

    const handleTargetCurrencyChange = (e) => {
        setTargetCurrency(e.target.value);
    };

    return (
        <div className="currency-converter">
            <h2>Currency Converter</h2>
            <div className="converter-form">
                <div className="input-group">
                    <label>Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        min="1"
                    />
                </div>
                <div className="input-group">
                    <label>From</label>
                    <select value={baseCurrency} onChange={handleBaseCurrencyChange}>
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div className="input-group">
                    <label>To</label>
                    <select value={targetCurrency} onChange={handleTargetCurrencyChange}>
                        {currencies.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div className="result">
                    {result !== null && (
                        <p>
                            {amount} {baseCurrency} = {result} {targetCurrency}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverter;
