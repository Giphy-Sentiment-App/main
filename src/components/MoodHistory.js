import MoodItem from './MoodItem';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, get } from 'firebase/database';
import firebase from '../firebase'; 

const MoodHistory = () =>{
    const [ mood, setMood ] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) =>{
            // console.log(response.val());
            const newState = [];
            const data = response.val();
            for (let key in data){
                newState.push(data[key]);
            }
            setMood(newState);
        })
    }, [])

    return(
        <>
        <ul>
            {mood.map((moods) => {
                
                return(
                    <li><MoodItem moodData={moods}/></li>
                )
            })}
            
        </ul>
        </>
    )
}

export default MoodHistory;