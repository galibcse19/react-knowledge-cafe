import PropTypes from 'prop-types';
 
const Bookmark = ({bookMark}) => {
     
    const {title }=bookMark;
     
    return (
        <div className='p-4 bg-slate-300 m-4 rounded'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};
Bookmark.propTypes ={
    bookMark:PropTypes.array.isRequired,
     
}
export default Bookmark;