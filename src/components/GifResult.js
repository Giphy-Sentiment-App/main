import GifItem from "./GifItem";

const GifResult = ({gifs, emptyInput, userInput, clearGifs}) => {
  return (
    <> 
    {/* condition to have the h2 pop up on gift search only */}
      {
        gifs.length === 0 ? null
        : <h2>Please select a gif that speaks to you to log in Mood History or try another word or pharse for different results.</h2> 
      }
      <ul>
        {
          emptyInput ? <p>Please tell us how you are feeling today</p>
          
          : (gifs.map((gifObject)=>{
            return(
              <li key={gifObject.id}> 
                <GifItem clearGifs={clearGifs} 
                gifData={gifObject} 
                userInput={userInput} />
              </li>
            )
          }))
        }
        
      </ul>      
    </>
  )
} 

export default GifResult;