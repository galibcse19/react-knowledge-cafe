 import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookMarks,readTime}) => {
    return (
        <div className="md:w-1/3 ml-4">
            <div className='mt-10' >
                <h3 className='text-2xl p-2 text-center border-solid border-2 border-sky-500'>Reading Time: {readTime} min</h3>
            </div>
            <h1 className="text-2xl p-2 text-center">Bookmark Blogs: {bookMarks.length}</h1>
            <h2>
                {
                    bookMarks.map(bookMark=> <Bookmark key={bookMark.id} bookMark={bookMark}></Bookmark>)
                }
            </h2>
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks:PropTypes.array.isRequired,
    readTime:PropTypes.number.isRequired
     
}
export default Bookmarks;