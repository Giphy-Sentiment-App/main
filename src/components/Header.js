const Header = () => {
  const currentDate = new Date();
  const options = {year:'numeric', month:'numeric', day:'numeric'}
  return (
    <>
    <h1>{currentDate.toLocaleString(undefined,options)}</h1>
    <h2>Please describe your emotional state with ONE word.</h2>
    </>
    
  )
}

export default Header;