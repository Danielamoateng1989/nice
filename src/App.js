
import './index.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Homepage/Services';
import ServiceDetail from '../src/Pages/ServicesDetailPage/ServicesDetail';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
  <Router>
   <Navbar />
   <main>
     
     <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/services" element={<ServiceDetail />} />

     </Routes>
    
   </main>
   <Footer />
   </Router>
  );
}

export default App;
