import './App.css';
import Grados from '../src/components/Grados/Grados'
import Superficie from '../src/components/Superficie/Superficie'
import CambiaImagen from '../src/components/CambiaImagen/CambiaImagen'

function App() {
  return (
    <div  className="App">
      <Grados />
      <Superficie />
      <CambiaImagen />
    </div>
  );
}

export default App;
