import './App.css';
import Navbar from './sections/Navbar/Navbar';
import FireTracker from './sections/FireTracker/FireTracker';
import FireProtocols from './sections/FireProtocols/FireProtocols';
import FireFacts from './sections/FireFacts/FireFacts';
import Resources from './sections/Resources/Resources';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <FireTracker />
      <FireProtocols />
      <FireFacts />
      <Resources />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
