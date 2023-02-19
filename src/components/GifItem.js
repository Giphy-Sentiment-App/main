// import libraries needed
import firebase from '../firebase';
import { useState } from 'react';
import { getDatabase, ref, push, update } from 'firebase/database';

// use props to create objects from Firebase
const GifItem = ({gifData, userInput, clearGifs})=> {

  // initialize states
  const [showMsg, setShowMsg]= useState(false);
  const currentDate = new Date();
  const options = {year:'numeric', month:'numeric', day:'numeric'}
  const userChoice = {
    date: currentDate.toLocaleString(undefined, options),
    gifUrl: gifData.images.original.url,
    emotion: userInput,
  }

  // saving data on gif click to Firebase
  const gifClick = () => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, '/userHistory');
    const firebaseObject = push(dbRef, userChoice);
    const firebaseKey = firebaseObject.key;
    const idObject = {id:firebaseKey}
    
    const childRef = ref(database,`/userHistory/${firebaseKey}` )
    update(childRef,idObject);
    

    // TODO: add saved msg to the page
    
    // if(setShowMsg == true){
    //   return(
    //   <h2>Saved!</h2>
    //   )
    // }

    setShowMsg(true);

    // clear page on click function 
    clearGifs();
  }


  return (
    <>
      <img src={gifData.images.original.url} alt={gifData.title} onClick={gifClick}/>
      
      
    </>

  )
}

export default GifItem;