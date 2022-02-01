import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "../components/Menu";
import Hola from "../components/Hola";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";
import Footer from '../components/Footer';


function App() {
  return (
    <div className="App">
     <Menu />
     <Hola />
     <Proyectos />
     <Contacto />
     <Footer />
    </div>
  );
}

export default App;
