import MoodItem from './MoodItem';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
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
            for (let key in data.userHistory){
                newState.push(data.userHistory[key]);
            }
            setMood(newState);
        })
    }, [])
    return(
        <>
        <ul>
            {mood.map((moods) => {
                console.log(moods.id);
                return(
                    
                    <li key={moods.id} ><MoodItem moodData={moods}/></li>
                    
                )
                
            })}
            
        </ul>
        </>
    )
}

export default MoodHistory;