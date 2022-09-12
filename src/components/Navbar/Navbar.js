/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Navbar.css'
import { clearNote } from '../../features/noteSlice';
const Navbar = (props) => {
    const dispatch = useDispatch();
    const [navClick, setnavClick] = useState(false)
    const Navigate = useNavigate();
    // let Location = useLocation();

    const logout = () => {
        localStorage.clear('token');
        dispatch(clearNote())
        props.showAlert("Logged out", "warning")
        setnavClick(!navClick)

        Navigate('/login')
    }

    const navButton = () => {
        setnavClick(!navClick)
    }



    return (

        <div className="home-body">

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid white">
                    <a className="navbar-brand white">My Notes</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link  white" aria-current="page"  onClick={()=>{Navigate("/")}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link white" onClick={()=>{Navigate("/notes")}}>Notes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link white" onClick={()=>{Navigate("/about")}}>About</a>
                            </li>
                            <li className="nav-item invisible  ">
                            <button className="btn btn-outline-light mx-3"  onClick={()=>{Navigate("/login")}}>Login</button>
                            </li>
                            <li className="nav-item invisible">
                            <button className="btn btn-outline-warning">Search</button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                        <button className="btn btn-outline-light mx-3"  onClick={(e)=>{ 
                            e.preventDefault()
                            Navigate("/login")}}>Login</button>

                            <button className="btn btn-outline-light"  onClick={(e)=>{
                                e.preventDefault()
                                logout()}}>Logout</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar