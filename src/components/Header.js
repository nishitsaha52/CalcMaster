import React from 'react';

function Header({ setActiveComponent, toggleTheme, isDarkTheme }) {
    return (
        <header>
            {/* Header Top Section: App Name and Theme Toggle */}
            <div className="header-top">
                <h1>CalcMaster</h1>
                <div className="theme-toggle" onClick={toggleTheme} role="button" aria-label="Toggle Theme">
                    <div className="circle"></div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav>
                <ul>
                    <li onClick={() => setActiveComponent('Calculator')}>Calculator</li>
                    <li onClick={() => setActiveComponent('CurrencyConverter')}>Currency Converter</li>
                    <li onClick={() => setActiveComponent('LengthConverter')}>Length Converter</li>
                    <li onClick={() => setActiveComponent('MassConverter')}>Mass Converter</li>
                    <li onClick={() => setActiveComponent('AreaConverter')}>Area Converter</li>
                    <li onClick={() => setActiveComponent('DataConverter')}>Data Converter</li>
                    <li onClick={() => setActiveComponent('DiscountCalculator')}>Discount Calculator</li>
                    <li onClick={() => setActiveComponent('SpeedConverter')}>Speed Converter</li>
                    <li onClick={() => setActiveComponent('TemperatureConverter')}>Temperature Converter</li>
                    <li onClick={() => setActiveComponent('BMICalculator')}>BMI Calculator</li>
                    <li onClick={() => setActiveComponent('GSTCalculator')}>GST Calculator</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
