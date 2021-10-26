import './App.css';
import { CountProvider } from './Context';
import Counter from './Counter';
import CounterValue from './CounterValue';

function App() {
  return (
    <CountProvider>
      <div className="App">
        <h1>Counter App</h1>
        <Counter />
        <CounterValue />
      </div>
    </CountProvider>
  );
}

export default App;
