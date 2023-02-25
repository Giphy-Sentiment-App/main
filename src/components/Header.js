import logo from '../assets/newLogo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  // created variables for the date to appear as the same as the browser locale, with options to how to be displayed
  const currentDate = new Date();
  const options = {year:'numeric', month:'numeric', day:'numeric'}
  return (
    <header>
    <div className="wrapper">
    <div className="imgContainer">
      <img src={logo} alt="Giphy Sentiment Logo" width={150}/>
      <h1>{currentDate.toLocaleString(undefined,options)}</h1>
        <div className="moodHistoryContainer wrapper">
          <Link to="/MoodHistory">
            <i className="fa-solid fa-shield-heart"></i>
            <div className='moodHistory'>Mood History</div>
          </Link>
        </div>
    </div>
    <h2>Please describe your emotional state with ONE word.</h2>

    </div>
    
    
    </header>
    
  )
}

export default Header;