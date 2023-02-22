import logo from '../assets/logo.jpg';

const Header = () => {
  // created variables for the date to appear as the same as the browser locale, with options to how to be displayed
  const currentDate = new Date();
  const options = {year:'numeric', month:'numeric', day:'numeric'}
  return (
    <>
    <div className="imgContainer">
    <img src={logo} alt="Giphy Sentiment Logo" width={150}/>
    </div>
    <div className="wrapper">
      <h1>{currentDate.toLocaleString(undefined,options)}</h1>
    <h2>Please describe your emotional state with ONE word.</h2>

    </div>
    
    
    </>
    
  )
}

export default Header;