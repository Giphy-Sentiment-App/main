import firebase from '../firebase';
import { getDatabase, ref, push, update } from 'firebase/database';

const GifItem = ({gifData, userInput, clearGifs})=> {

  const currentDate = new Date();
  const options = {year:'numeric', month:'numeric', day:'numeric'}
  const userChoice = {
    date: currentDate.toLocaleString(undefined, options),
    gifUrl: gifData.images.original.url,
    emotion: userInput,
  }

  
  const gifClick = () => {
    
    const database = getDatabase(firebase);
    const dbRef = ref(database, '/userHistory');
    const firebaseObject = push(dbRef, userChoice);
    const firebaseKey = firebaseObject.key;
    const idObject = {
      id:firebaseKey
    }
    
    const childRef = ref(database,`/userHistory/${firebaseKey}` )
    update(childRef,idObject);
    
    // clear page on click function needed to be placed correctly
    clearGifs();
  }
  

  return (
    <>
    <img src={gifData.images.original.url} alt={gifData.title} onClick={gifClick}/> 
    </>

  )
}

export default GifItem;