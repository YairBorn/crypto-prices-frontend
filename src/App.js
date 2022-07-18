import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code>{props.coin} PRICE</code> 
        </p>       
      </header>
    </div>
  );
}

export default App;
