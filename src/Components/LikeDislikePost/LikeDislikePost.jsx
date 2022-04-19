import React, {useState, useEffect} from 'react';
import './LikeDislikePost.css'

const LikeDislikePost = (props) => {

    const [likeActive, setLikeActive] = useState(false);
    const [dislikeActive, setDislikeActive] = useState(false);

    const [likeButtonClass, setLikeButtonClass] = useState('inactive');
    const [dislikeButtonClass, setDislikeButtonClass] = useState('inactive');


    const handleLikeClick = () => {
        if (likeActive) {
            setLikeActive(false);
        } else {
            setLikeActive(true);
            setDislikeActive(false)
        }
    }

    const handleDislikeClick = () => {
        if (dislikeActive) {
            setDislikeActive(false);
        } else {
            setDislikeActive(true);
            setLikeActive(false);
        }
    }

    useEffect(() => {
        if(likeActive === true){
            setLikeButtonClass('like-active')
        } else if(likeActive === false) {
            setLikeButtonClass('inactive')
        }
    }, [likeActive])

    useEffect(() => {
        if(dislikeActive === false){
            setDislikeButtonClass('inactive')
        } else {
            setDislikeButtonClass('dislike-active')
        }
    }, [dislikeActive])


    return (
        <div className="button-wrapper">
            <div className='button-img'>
                <button className={likeButtonClass} onClick={(e)=>handleLikeClick(e)}>Like</button>
            </div>
            <div>
                <button className={dislikeButtonClass} onClick={(e)=>handleDislikeClick(e)}>Dislike</button>
            </div>
        </div>
    )
}

export default LikeDislikePost;