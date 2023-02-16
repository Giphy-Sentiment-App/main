import React from 'react'
import Header from './Header';
import Form from './Form';
import { Link, Routes, Route } from 'react-router-dom';
import MoodHistory from './MoodHistory';


const Home = () =>{
  return (
    <>
    <Header />
    <Form />
    <div className="moodHistoryContainer">
        <Link to="/MoodHistory">
          <button className='moodHistory'>Mood History</button>
        </Link>
    </div>
    </>
  )
}
export default Home;
