import logo from '../assets/logo.jpg';

const Header = () => {
  const currentDate = new Date();
  const options = {year:'numeric', month:'numeric', day:'numeric'}
  return (
    <>
    <div className="imgContainer">
    <img src={logo} alt="Giphy Sentiment Logo" width={150}/>
    </div>
    <h1>{currentDate.toLocaleString(undefined,options)}</h1>
    <h2>Please describe your emotional state with ONE word.</h2>
    </>
    
  )
}

export default Header;