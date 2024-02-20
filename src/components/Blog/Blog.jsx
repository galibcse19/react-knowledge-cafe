import PropTypes from 'prop-types';
import { IoBookmarks } from "react-icons/io5";
const Blog = ({blog,handelAddToBookMark,handelMarkAsRead}) => {

    const {title,cover_photo,author_img,reading_time,author,posted_date,hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-4' src={cover_photo} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex mb-4'>
                    <div><img className='w-12' src={author_img} alt="" /></div>
                    <div className='ml-4'><p className='text-2xl'>{author}</p>
                         <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span> <button onClick={()=>handelAddToBookMark(blog)} className='ml-2'><IoBookmarks /></button>
                </div>
            </div>
            <h2 className="text-4xl mb-2">{title}</h2>
            {/* <p><span>#{hashtags[0]}</span> #<span>{hashtags[1]}</span></p> */}
            <p>
                {
                    hashtags.map((has,idx) => <span key={idx}> <a href="">#{has}</a> </span>)
                }
            </p>
            <button  onClick={()=>handelMarkAsRead(reading_time)} className='mt-4 text-red-400 font-bold'> Mark As Read</button>
        </div>
    );
};

Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    title:PropTypes.string.isRequired,
    handelAddToBookMark:PropTypes.func,
    handelMarkAsRead:PropTypes.func
}
export default Blog;