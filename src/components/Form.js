// imported libraries needed
import { useState, useRef } from "react";
import axios from "axios";
import GifResult from "./GifResult";

const Form = () => {
// initialize state
  const [ gifs, setGifs] = useState([]);
  const [ userInput, setUserInput ] = useState('');
  const [ wordCount, setWordCount ] = useState(0);
  const [ emptyInput, setEmptyInput] = useState(false);
  const [ mostRecentSearch, setMostRecentSearch ] = useState('');
  const [ loading, setLoading ] = useState(false)
  const inputRef = useRef();
  const [showMsg, setShowMsg] = useState(false);


  // create a function to count userInput
  const countWord = (e) => {
    const text = inputRef.current.value;
    setWordCount(text.split(" ").length);
    if (text.split(" ").length > 1) {
      setUserInput("")
    }  
  }

  // create a function to :
    // call the API onclick, and load API states
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

// create a function to save user input
const handleChange = (event) => {
  setUserInput(event.target.value);
  countWord();
  event.preventDefault();
}

// create a funciton to clear the gifs
const clearGifs = () => {
  setGifs([]);
  setShowMsg(true);
}



return ( 
    <>
    <div className="wrapper">
      <form action="" onSubmit = {(event) => {handleClick(event, userInput, inputRef)}} >
        <label htmlFor="search"></label>
          <input onChange={ handleChange } ref={ inputRef } value={userInput} type="text" placeholder="grateful"/>
        <button  className="searchButton" type="submit">{ loading ? <>Loading..</> : <>Search</>}</button>          
      </form>
    </div>
    <div>
      {
        wordCount > 1
          ? <p>nuh uh uh! one word please! </p>
          : null
      }
      {
        showMsg === true
        ? <h3>Your mood has been saved. Check out the Mood History button!</h3>
        : null
      }
    </div>
      <GifResult clearGifs={clearGifs} gifs={gifs} emptyInput={emptyInput} userInput={mostRecentSearch} />
    </>
  )
}

export default Form;