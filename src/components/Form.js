import { useState, useRef } from "react";
import axios from "axios";
import GifResult from "./GifResult";


const Form = () => {

  const [ gifs, setGifs] = useState([]);
  const [ userInput, setUserInput ] = useState('');
  const [ wordCount, setWordCount ] = useState(0);
  const [ emptyInput, setEmptyInput] = useState(false);
  const [ mostRecentSearch, setMostRecentSearch ] = useState('');
  const [ loading, setLoading ] = useState(false)
  const inputRef = useRef();

  const countWord = (e) => {
    const text = inputRef.current.value;
    setWordCount(text.split(" ").length);  
  }

  const handleClick = (event) => {
    event.preventDefault();
    setMostRecentSearch(userInput);
    setUserInput("");

    setLoading(true);
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
  
    if(res.data.data.length === 0){
      setEmptyInput(true);
      setLoading(false);
    }else{
      setEmptyInput(false);
      setLoading(false);
    }
  }) 
 
}

const handleChange = (event) => {
  setUserInput(event.target.value);
  countWord();
  event.preventDefault();
 
}

const clearGifs = () => {
  setGifs([]);
}

return (
    
    <>
    <div>
      <form action="" onSubmit = {(event) => {handleClick(event, userInput, inputRef)}} >
        <label htmlFor="search"></label>
          <input onChange={ handleChange } ref={ inputRef } value={userInput} type="text" placeholder="grateful"/>
        <button  type="submit">{ loading ? <>Loading..</> : <>Search</>}</button>          
      </form>
    </div>
    <div>
      {
        wordCount > 1
          ? alert("nuh uh uh! only one word!") && setUserInput("")
          : null
      }
    </div>

    <div><GifResult clearGifs={clearGifs} gifs={gifs} emptyInput={emptyInput} userInput={mostRecentSearch}/></div>
    </>
  )
}

export default Form;