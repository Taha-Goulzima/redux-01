import './App.css';
import { CounterShow } from './components/CounterShow';
import { IncrementBtn } from './components/Increment';
import { DecrementBtn } from './components/Decrement';
import { AddAmountForm } from './components/AddAmountForm';

function App() {
  return (
    <div className="App">
      <CounterShow />
      <div>
        <IncrementBtn />
        <DecrementBtn />
      </div>
      <AddAmountForm />
    </div>
  );
}

export default App;
