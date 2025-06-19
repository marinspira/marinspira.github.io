import React, { useContext } from 'react';

// assets
import * as C from '../../../sections/recent-posts/styles'

// contexts
import { PostsContext } from '../../../contexts/postsContext';

// utils
import Post from '../../postCardItem';

function Posts({ posts }) {

    return (
        <C.Container>
            <ul>
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </ul>
        </C.Container>
    );
}

export default Posts;