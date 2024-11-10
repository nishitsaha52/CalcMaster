import React, { useState, useEffect } from 'react';
import Calculator from './components/Calculator';
import CurrencyConverter from './components/CurrencyConverter';
import LengthConverter from './components/LengthConverter';
import MassConverter from './components/MassConverter';
import AreaConverter from './components/AreaConverter';
import DataConverter from './components/DataConverter';
import DiscountCalculator from './components/DiscountCalculator';
import SpeedConverter from './components/SpeedConverter';
import TemperatureConverter from './components/TemperatureConverter';
import BMICalculator from './components/BMICalculator';
import GSTCalculator from './components/GSTCalculator';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [activeComponent, setActiveComponent] = useState('Calculator');
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-theme');

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    };

    const renderComponent = () => {
        switch (activeComponent) {
            case 'Calculator':
                return <Calculator />;
            case 'CurrencyConverter':
                return <CurrencyConverter />;
            case 'LengthConverter':
                return <LengthConverter />;
            case 'MassConverter':
                return <MassConverter />;
            case 'AreaConverter':
                return <AreaConverter />;
            case 'DataConverter':
                return <DataConverter />;
            case 'DiscountCalculator':
                return <DiscountCalculator />;
            case 'SpeedConverter':
                return <SpeedConverter />;
            case 'TemperatureConverter':
                return <TemperatureConverter />;
            case 'BMICalculator':
                return <BMICalculator />;
            case 'GSTCalculator':
                return <GSTCalculator />;
            default:
                return <Calculator />;
        }
    };

    return (
        <div className="app">
            <Header setActiveComponent={setActiveComponent} toggleTheme={toggleTheme} theme={theme} />
            <br/><br/>
            <main>
                {renderComponent()}
            </main>
            <br/><br/>
            <br/><br/>
            <Footer />
        </div>
    );
}

export default App;
