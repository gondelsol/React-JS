import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';


function App() {
  return (
    <div className="App">
          <Navbar />
          {/*<ItemListContainer />*/}
          <ItemDetailConteiner />
    </div>
  );
}

export default App;
