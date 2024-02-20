import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelAddToBookMark,handelMarkAsRead}) => {

    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data));
    },[])


    return (
        <div className="md:w-2/3">
              <h2 className="text-2xl mb-2">Blog-Length: {blogs.length}</h2>
              {
                blogs.map(blog => <Blog handelMarkAsRead={handelMarkAsRead} handelAddToBookMark={handelAddToBookMark} key={blogs.id} blog={blog}></Blog>)
              }
        </div>
    );
};
Blogs.propTypes ={
    handelAddToBookMark:PropTypes.func,
    handelMarkAsRead:PropTypes.func
}
export default Blogs;