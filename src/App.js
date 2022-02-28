
import './index.css';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import Homepage from './Pages/Home/Services';

function App() {
  return (
    <>
   <Navbar />
   <main>
    <Homepage/>
   </main>
   <Footer />
   </>
  );
}

export default App;
