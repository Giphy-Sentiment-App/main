import MoodItem from './MoodItem';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import firebase from '../firebase';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
 

const MoodHistory = () =>{
    const [ mood, setMood ] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) =>{
            // console.log(response.val());
            const newState = [];
            const data = response.val();
            for (let key in data.userHistory){
                newState.push(data.userHistory[key]);
            }
            setMood(newState);
        })
    }, [])

    return(
        <>
        <div className="imgContainer">
        <Link to="/"><img src={logo} alt="Giphy Sentiment Logo" width={150}/></Link> 
        </div>
        <h2>Your Mood History</h2>
        <ul>
            {mood.map((moods) => {
                return (
                    <li key={moods.id} ><MoodItem moodData={moods}/></li>
                )
            })}
            
        </ul>
        <Link to="/"><button>Back to Home</button></Link>
        </>
    )
}

export default MoodHistory;