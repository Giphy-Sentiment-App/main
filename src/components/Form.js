import { useState, useEffect } from "react";
import axios from "axios";


const Form = () => {

  const [ gifs, setGifs] = useState({});
  const [ userInput, setUserInput ] = useState('');

 
  
  const handleClick = (event) => {
    event.preventDefault();
  

  axios({
    baseURL: `https://api.giphy.com/v1/gifs/search`,
    params: {
      api_key: "AHLePgCw2CI500eePvaoRnnJslTQy54X",
      q: userInput,
      limit: 9,
      rating: "g"
    }
  }).then ((data) => {
    console.log(data);
  }) 
}

const handleChange = (event) => {
  setUserInput(event.target.value);
}

return (
    

    <div>
      <form action="" onSubmit = {(event) => {handleClick(event, userInput)}} >
        <label htmlFor="search"></label>
          <input onChange={ handleChange } value={userInput} type="text" placeholder="grateful"/>
        <button type="submit">Submit</button>          
      </form>
    </div>
  )
}

export default Form;