import GifItem from "./GifItem";

// using props to create objects from API data
const GifResult = ({gifs, emptyInput, userInput, clearGifs}) => {
  return (
    <> 
    {/* condition to have the h2 pop up on gift search only */}
      {
        gifs.length === 0 ? null
        : <div className="wrapper"> <h2>Please select a gif that speaks to you to log in Mood History or try another word or mood for different results.</h2> </div>
      }
      <ul className="imgGallery wrapper">
        {
          emptyInput ? <h3>No results found. Please tell us how you are feeling today!</h3>
          
          : (gifs.map((gifObject)=>{
            return(
              <li className ="images" key={gifObject.id}> 
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