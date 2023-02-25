// import libraries needed
import { useState } from "react";
import img from "../assets/Animated-Down-Arrow.gif"
// use props to pass down data from Firebase
const MoodItem = ({moodData}) => {

    // state to show information when arrow clicked
    const [showMore, setShowMore] = useState(false);

    return(
        <div className="gifContainer">
            <img src={moodData.gifUrl} alt={moodData.emotion}/>
            <button className="triangle" onClick={() => setShowMore(!showMore)}>
            <img src={img} alt="downward arrow" />
            </button>
            
            {
                showMore ? 
                    <div className="historyData"> 
                    <p>{moodData.emotion}</p>
                    <p>{moodData.date}</p>
                    </div>

                : null
            }
        </div>
    )
}

export default MoodItem;