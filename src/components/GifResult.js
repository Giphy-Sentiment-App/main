
import GifItem from "./GifItem";

const GifResult = ({gifs, emptyInput}) => {
  return (
    <>
      <ul>
        {
          emptyInput ? <p>Please tell us how you are feeling today</p>
          
          : (gifs.map((gifObject)=>{
            // console.log(gifObject);
            return <li key={gifObject.id}> <GifItem gifData={gifObject}/> </li>
          }))
    }
      </ul>      
      </>
  )
} 

export default GifResult;