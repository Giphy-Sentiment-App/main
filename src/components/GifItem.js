import firebase from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { useState } from 'react';

const GifItem = ({gifData})=> {

  const [userClick, setUserClick] = useState(null);

  const gifClick = () => {
    
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    push(dbRef, userClick);
    setUserClick(gifData.images.original.url);
    // window.location.reload(false);
  }
 
  return (
    <>
    <img src={gifData.images.original.url} alt={gifData.title} onClick={gifClick}/> 
    </>
   
  )
}

export default GifItem;