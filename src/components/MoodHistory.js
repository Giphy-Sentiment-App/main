// import libraries needed
import MoodItem from './MoodItem';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from '../firebase';
import logo from '../assets/newLogo.jpg';
import { Link } from 'react-router-dom'; 


const MoodHistory = () =>{
    // initialize states
    const [ mood, setMood ] = useState([]);
    // getting data from firebase
    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) =>{
            const newState = [];
            const data = response.val();
            for (let key in data.userHistory){
                newState.push(data.userHistory[key]);
            }
            setMood(newState);
        })
    }, [])

    return(
        <section className='moodHistory'>
            <div className="imgContainer wrapper">
            <Link to="/"><img src={logo} alt="Giphy Sentiment Logo" width={150}/></Link> 
            </div>
            <h2>Your Mood History</h2>
            <ul className='imgGallery wrapper'>
                {mood.map((moods) => {
                    return (
                        <li className='images' key={moods.id} ><MoodItem moodData={moods}/></li>
                    )
                })}
                
            </ul>
            <div className="btnContainer">
            <Link to="/"><button className='backBtn'>Back to Home</button></Link>
            </div>
        </section>
    )
}

export default MoodHistory;