import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import Hero from './components/hero.jsx';
import Galeria from './components/galeria.jsx';
import Tratamientos from './components/tratamientos.jsx';

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Tratamientos />
                <Galeria />
            </main>
            <Footer /> 
        </>
    )
}