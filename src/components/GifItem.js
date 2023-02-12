import firebase from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';
import { useState } from 'react';

const GifItem = ({gifData})=> {

  const [userClick, setUserClick] = useState(null);
  const currentDate = new Date();
  const options = {year:'numeric', month:'numeric', day:'numeric'}

  const gifClick = () => {
    
    const database = getDatabase(firebase);
    const dbRef = ref(database, '/userHistory/gifUrl');
    push(dbRef, userClick);
    setUserClick(gifData.images.original.url);

    const userSavedData = (user) => {
      const userData = ref(database, '/userHistory/date')
      push(userData, user)
    }
    userSavedData(currentDate.toLocaleString(undefined,options))
    // clear page on click function needed to be placed correctly
    // window.location.reload(false);

    console.log(gifData);
  }
 

  return (
    <>
    <img src={gifData.images.original.url} alt={gifData.title} onClick={gifClick}/> 
    </>
   
  )
}

export default GifItem;