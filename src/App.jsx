import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
   
const [bookMarks,setBookMarks]= useState([]);
const [readTime,setReadTime]=useState(0);
const handelAddToBookMark=blog=>{
   const newBookMark=[...bookMarks,blog];
   setBookMarks(newBookMark);
}
const handelMarkAsRead=time=>{
   const NewTime=readTime+time;
   setReadTime(NewTime);
}
  return (
    <> 
      
      <div className='max-w-7xl mx-auto'>
            <Header></Header>
          <div className='md:flex mx-4 p-4'>
            <Blogs handelMarkAsRead={handelMarkAsRead} handelAddToBookMark={handelAddToBookMark}></Blogs>
            <Bookmarks readTime={readTime}  bookMarks={bookMarks}></Bookmarks>
          </div>
      </div>
      
    </>
  )
}

export default App
