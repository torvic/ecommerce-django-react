import './App.css';
import MySite from './components/MySite';
import { OrderItemsProvider } from './context/OrderItemsContext';

function App() {
  return (
    <>
      <OrderItemsProvider>
        <MySite />
      </OrderItemsProvider>
    </>
  );
}

export default App;
