import { useState } from "react";
import axios from "axios";
import GifResult from "./GifResult";


const Form = () => {

  const [ gifs, setGifs] = useState([]);
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
  }).then ((res) => {
    setGifs(res.data.data);
    console.log(res.data.data);
  }) 
}

const handleChange = (event) => {
  setUserInput(event.target.value);
}

return (
    
    <>
    <div>
      <form action="" onSubmit = {(event) => {handleClick(event, userInput)}} >
        <label htmlFor="search"></label>
          <input onChange={ handleChange } value={userInput} type="text" placeholder="grateful"/>
        <button type="submit">Submit</button>          
      </form>
    </div>

    <div><GifResult gifs={gifs}/></div>
    </>
  )
}

export default Form;