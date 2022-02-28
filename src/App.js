
import './index.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Homepage/Services';
import Hero from './Components/Hero/Hero';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
  <Router>
   <Navbar />
   <main>
     <Hero />
     <Routes>
          <Route path="/" element={<Home />} exact="true" />
          
     </Routes>
    
   </main>
   <Footer />
   </Router>
  );
}

export default App;
