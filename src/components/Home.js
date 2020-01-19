import React from 'react'
import {useSelector} from 'react-redux';
import Login from './author/Login';
import Dashboard from '../Dashboard';
const Home = () => {
   const {author, isAuthenticated } = useSelector(state =>(
     state.isAuthenticated,
     state.author
   ))
    return (
        <div>
           {isAuthenticated ? <Dashboard author={author}/> : <Login />}   
        </div>
    )
}

export default Home;