import firebase from "../firebase";

const MoodItem = ({moodData}) => {
    return(
        <div className="gifContainer">
            <img src={moodData.gifUrl} alt={moodData.emotion}/>
            <p>{moodData.emotion}</p>
            <p>{moodData.date}</p>
        </div>
    )
}

export default MoodItem;