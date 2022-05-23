import React from 'react'
import { Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <div className = 'Pagenotfound'>
        <h2>404</h2>
        <p>Page not found</p>
        <Link to = '/'>Go back to home</Link>

    </div>
  )
}

export default Pagenotfound;