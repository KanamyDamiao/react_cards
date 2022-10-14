import { Button, ButtonBase } from '@mui/material'
import './App.css';
import Contador from './components/Contator';
import FetchNews from './components/FetchNews';
import FetchProducts from './components/FetchProduct';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá Mundo</h1>
        <div style={{ padding: "2rem" }}>
          {/* <FetchNews />
          <Contador /> */}
          <FetchProducts />
        </div>
      </header>
    </div>
  );
}

export default App;
