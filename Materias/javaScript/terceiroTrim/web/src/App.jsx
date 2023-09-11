import './App.css';
import Button from './components/Button';
import horaCerta from './components/HoraCerta';

function App() {  
  return (
    <div className='app'>
      <header>
        <h1>Eu sabo!</h1>
      </header>
      <main>
        <p>
          mãe eu gostaria de saber o por que eu não sabo ?
        </p>
        <img src="https://i.redd.it/xgn9cucxz8hb1.jpg" alt="eu sabo"/>
        <Button content='sim mamae'/>
        <horaCerta/>
      </main>
    </div>

  )
}

export default App;
