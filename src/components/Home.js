import React from 'react'
import {useSelector} from 'react-redux';
import Login from './author/Login';
const Home = () => {
   const {author, isAuthenticated } = useSelector(state =>(
     state.isAuthenticated,
     state.author
   ))
    return (
        <div>
           {isAuthenticated ? <h1>Welcome {author}</h1> : <Login />}   
        </div>
    )
}

export default Home;