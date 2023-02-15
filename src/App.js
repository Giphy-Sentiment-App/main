import './styles.css' ; 
import Home from './components/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import MoodHistory from './components/MoodHistory';


const App = ()=> {
  return (
  <>
  <Home Link to="/Home"/>
  
  <Footer />
  
      <Routes>
        <Route path="/MoodHistory" element={<MoodHistory />} />
      </Routes>
  
  </>
  );
}

export default App;
