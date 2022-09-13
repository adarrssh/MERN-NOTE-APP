import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router'

const Home = () => {
  const Navigate = useNavigate();
  return (


    <div className="home-main ">
      <div className="home-text text-anim">
        <h1>A simple Lightweight <br />
          <span>Fast and Secure App <br />
            to replace them all</span></h1>

        <h5>Accomplish more with better notes</h5>

        <div>
          <button className='btn btn-light' onClick={()=>{Navigate('/notes')}}>Create Notes</button>
          <img className='diary-img' src={require("../../png/note.png")} alt="" />
        </div>
      </div>

      <img className='note-img img-anim' src={require("../../png/128x128/note_edit.png")} alt="" />


    </div>

  )
}

export default Home