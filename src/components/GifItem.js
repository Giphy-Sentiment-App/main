const GifItem = ({gifData})=> {
  return (
    <>
    <img src={gifData.images.original.url} alt={gifData.title} /> </>
   
  )
}

export default GifItem;