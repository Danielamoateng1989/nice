
import './index.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Homepage/Services';
import Hero from './Components/Hero/Hero';

const App = () => {
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
