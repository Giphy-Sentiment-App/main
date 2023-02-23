import './styles.css' ; 
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import MoodHistory from './components/MoodHistory';


const App = ()=> {
  return (
  <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MoodHistory" element={<MoodHistory />} />
      </Routes>
  
  <Footer />
  </>
  );
}

export default App;
