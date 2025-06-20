import React, { useContext } from 'react';

// assets
import * as C from './styles'

// contexts
import { PostsContext } from '../../../contexts/postsContext';

// utils
import Post from '../../postCardItem';

function Posts({ posts }) {

    return (
        <C.Container>
                <div className='container'>
                <C.PostArchive>
                    {posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </C.PostArchive>
        </div>
            </C.Container>
    );
}

export default Posts;