import React from 'react'
import { useNavigate, useParams}  from 'react-router-dom'
import useFetch from './useFetch'

function Blogdetails() {
    const {id} = useParams();
    const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs/'+ id.trim());
    const navigate=useNavigate();

    const handleDelete = () => {
      fetch('http://localhost:8000/blogs/'+ id.trim(), {
        method: 'DELETE',
      }).then(()=>{
        navigate('/');
  })
}
  return (
    <div className= 'blog-details'>
        {isPending && <div>Loading...</div>} 
        {error && <div> {error}</div>}
        { blogs && (
          <article>
            <h3>{blogs.title}</h3>
            <p>Written by {blogs.author}</p>
            <div>{blogs.body}</div>
          </article>
        )}
         <button onClick={handleDelete}>Delete blog</button>

    </div>
  )
}

export default Blogdetails;