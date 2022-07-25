import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LineChart from './App';
import reportWebVitals from './reportWebVitals';
import CoinsToggleButtons from './CoinsToggleButtons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div justify={"center"}>
    <CoinsToggleButtons pushData={LineChart.pullData}/>
    </div>
    <LineChart coin={"btc"}/>
  </React.StrictMode>
);


reportWebVitals();
