import React, { useContext } from 'react';

// assets
import * as C from '../../../sections/sectionPostCards/styles'

// contexts
import { PostsContext } from '../../../contexts/postsContext';

// utils
import Post from '../../postCardItem';

function Posts() {

    const { posts } = useContext(PostsContext)

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