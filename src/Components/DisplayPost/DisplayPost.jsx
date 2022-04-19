import React from 'react';
import Post from '../Post/Post';

const DisplayPosts = (props) => {


    return ( 
        props.posts.map((post, i) => 
            <div key={i}>
                <Post post={post}/>
            </div>
        )
     )
}
 
export default DisplayPosts;