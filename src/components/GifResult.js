
import GifItem from "./GifItem";

const GifResult = ({gifs, emptyInput, userInput}) => {
  return (
    <>
      <ul>
        {
          emptyInput ? <p>Please tell us how you are feeling today</p>
          
          : (gifs.map((gifObject)=>{
            return <li key={gifObject.id}> <GifItem gifData={gifObject} userInput ={userInput}/> </li>
          }))
    }
      </ul>      
      </>
  )
} 

export default GifResult;