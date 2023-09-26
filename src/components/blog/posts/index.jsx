import React, { useContext } from 'react';

// assets
import * as C from '../../posts/styles'

// contexts
import { PostsContext } from '../../../contexts/postsContext';

// utils
import { renderHTML } from '../../../utils/renderHtml';
import { limitText } from '../../../utils/limitText';

function Posts() {

    const { posts } = useContext(PostsContext)

    return (
        <C.Container>
            <ul>
                {posts.map((post) => (
                    <C.Post to={`/blog/${post.id}`} key={post.id}>
                        <label>{post.labels}</label>
                        <C.Title>{post.title}</C.Title>
                        <div dangerouslySetInnerHTML={renderHTML(limitText(post.content, 150))} />
                    </C.Post>
                ))}
            </ul>
        </C.Container>
    );
}

export default Posts;