import React, { useState } from 'react';
import './App.css';

function App() {
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [velocity, setVelocity] = useState('');

  const calculate = () => {
    if (distance && time) {
      const calculatedVelocity = distance / time;
      setVelocity(calculatedVelocity.toFixed(2));
    } else if (distance && velocity) {
      const calculatedTime = distance / velocity;
      setTime(calculatedTime.toFixed(2));
    } else if (time && velocity) {
      const calculatedDistance = time * velocity;
      setDistance(calculatedDistance.toFixed(2));
    } else {
      alert('Por favor, forneça pelo menos duas variáveis para calcular.');
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de Física</h1>
      <div>
        <label>Distância (m):</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>
      <div>
        <label>Tempo (s):</label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div>
        <label>Velocidade (m/s):</label>
        <input
          type="number"
          value={velocity}
          onChange={(e) => setVelocity(e.target.value)}
        />
      </div>
      <button onClick={calculate}>Calcular</button>
    </div>
  );
}

export default App;