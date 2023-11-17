import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState('');
  const [mean, setMean] = useState(null);
  const [median, setMedian] = useState(null);
  const [mode, setMode] = useState(null);

  const calculate = () => {
    const numberArray = numbers.split(',').map((num) => parseFloat(num.trim()));

    // Calcula a média
    const calculatedMean = numberArray.reduce((acc, num) => acc + num, 0) / numberArray.length;
    setMean(calculatedMean.toFixed(2));

    // Calcula a mediana
    const sortedNumbers = numberArray.slice().sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedNumbers.length / 2);
    const calculatedMedian =
      sortedNumbers.length % 2 === 0
        ? (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2
        : sortedNumbers[middleIndex];
    setMedian(calculatedMedian.toFixed(2));

    // Calcula a moda
    const numberCounts = {};
    for (const num of numberArray) {
      numberCounts[num] = (numberCounts[num] || 0) + 1;
    }
    let maxCount = 0;
    let modeArray = [];
    for (const num in numberCounts) {
      if (numberCounts[num] > maxCount) {
        maxCount = numberCounts[num];
        modeArray = [num];
      } else if (numberCounts[num] === maxCount) {
        modeArray.push(num);
      }
    }
    const calculatedMode = modeArray.join(', ');
    setMode(calculatedMode);
  };

  return (
    <div className="App">
      <h1>Calculadora Estatística</h1>
      <div>
        <label>Números (separados por vírgula):</label>
        <input
          type="text"
          value={numbers}
          onChange={(e) => setNumbers(e.target.value)}
        />
      </div>
      <button onClick={calculate}>Calcular</button>
      <div>
        <p>Média: {mean}</p>
        <p>Mediana: {median}</p>
        <p>Moda: {mode}</p>
      </div>
    </div>
  );
}

export default App;
