import React from 'react'
import Header from './Header';
import Form from './Form';
import { Link, Routes, Route } from 'react-router-dom';


const Home = () =>{
  return (
    <>
    <Header />
    <Form />
    <div className="moodHistoryContainer">
    <button className='moodHistory'>Mood History</button>
    </div>

    <Routes>

    </Routes>
    </>
  )
}
export default Home;
