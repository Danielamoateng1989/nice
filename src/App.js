
import './index.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Home/Services';
import Hero from './Components/Hero/Hero';

function App() {
  return (
    <>
   <Navbar />
   <main>
     <Hero />
    <Homepage/>
   </main>
   <Footer />
   </>
  );
}

export default App;
