import React, { useContext } from 'react';

// assets
import * as C from '../../posts/styles'

// contexts
import { PostsContext } from '../../../contexts/postsContext';

// utils
import Post from '../../post';

function Posts() {

    const { posts } = useContext(PostsContext)

    return (
        <C.Container>
            <ul>
                {posts.map((post) => (
                    <Post post={post} />
                ))}
            </ul>
        </C.Container>
    );
}

export default Posts;