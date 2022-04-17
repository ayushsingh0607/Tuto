import React from 'react' 
import {useState} from 'react'
import Bloglist from './Bloglist'
function Home() {
  const[blogs, setBlogs]=useState([
          { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
         { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
         { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
         ]);
         const handleDelete =(id)=>{
           const newblogs=blogs.filter(blog=>blog.id!==id);
            setBlogs(newblogs);
         }
       return (
         <div className='home'>
           <Bloglist blogs={blogs} title="All Blogs!" handleDelete ={handleDelete } />
           {/* <Bloglist blogs={blogs.filter(blog => blog.author==='mario')} title="mario's Blogs" />  */}
         </div>
  )
}

export default Home