import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
        <Navbar icono="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" />
      <h1>Café Cienfuegos</h1>
      <ItemListContainer greeting="Bienvenido a Café Cienfuegos"/>
    </div>
  );
};

export default App;
