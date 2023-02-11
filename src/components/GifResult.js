import GifItem from "./GifItem";

const GifResult = ({gifs}) => {
  console.log(gifs)
  return (
      <>
      <ul>
      {gifs.map((gifObject)=>{
      return <li key={gifObject.id}> <GifItem gifData={gifObject}/> </li>
      })}
      </ul>
      
      
      </>
      
      
    
    
  )
} 

export default GifResult;