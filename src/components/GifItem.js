import firebase from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';

const GifItem = ({gifData, userInput})=> {

  const currentDate = new Date();
  const options = {year:'numeric', month:'numeric', day:'numeric'}
  const userChoice = {
    date: currentDate.toLocaleString(undefined, options),
    gifUrl: gifData.images.original.url,
    emotion: userInput
  }

  const gifClick = () => {
    
    const database = getDatabase(firebase);
    const dbRef = ref(database, '/userHistory');
    push(dbRef, userChoice);
    // setUserClick();
  
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