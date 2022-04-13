import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment';

function Post({ post, index, handleUpdateLikeAndDislike }) {
  const [like, setLike] = useState(post.like);
  const [dislike, setDislike] = useState(post.disLike);

  useEffect(() => {
    post['like'] = like;
    handleUpdateLikeAndDislike(post, index);
  }, [like, post]);
  useEffect(() => {
    post['disLike'] = dislike;
    handleUpdateLikeAndDislike(post, index);
  }, [dislike, post]);

  const handleThumbsOnClick = (likeOrDislike, post) => {
    if (likeOrDislike === 'like') {
      setLike(!like);
      if (dislike === true) {
        setDislike(false);
      }
    } else {
      setDislike(!dislike);
      if (like === true) {
        setLike(false);
      }
    }
  };

  return (
    <Fragment>
      <div
        className='name post-item'
        style={{ fontWeight: 'bolder', fontSize: '1rem' }}
      >
        {post.name}
      </div>
      <div className='post post-item'>{post.comment}</div>
      <div className='date'>
        Posted on: {moment(post.date).format('MMM Do YYYY, h:mm:ss a')}
      </div>
      <div className='thumbs post-item'>
        <span
          className='glyphicon glyphicon-thumbs-up'
          onClick={() => handleThumbsOnClick('like', post)}
          style={{ color: like ? '#32CD32' : 'grey' }}
        ></span>
        <span
          className='glyphicon glyphicon-thumbs-down'
          onClick={() => handleThumbsOnClick('dislike', post)}
          style={{ color: dislike ? 'red' : 'grey' }}
        ></span>
      </div>
      <hr />
    </Fragment>
  );
}

export default Post;