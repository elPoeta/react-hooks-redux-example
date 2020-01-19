import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = ({author}) => {
  return (
    <div>
   <h1>Welcome {author}</h1>
<Link to='/createrecipe'>Create Recipe</Link>
    </div>
  )
}

export default Dashboard
