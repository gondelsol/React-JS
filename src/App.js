import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
          <Navbar />
          <ItemListContainer />
          <ItemCount  stock="8" initial="1" />
  
  Trabajo de ReactJS
    </div>
  );
}

export default App;
