import { useContext } from 'react';
import * as C from './styles';
import { PostsContext } from '../../contexts/postsContext';
import Post from '../post';

function Blog() {

    const { posts } = useContext(PostsContext)

    return (
        <C.Section >
            <C.Container id="blog">
                <C.Title>Blog</C.Title>
                <ul>
                    {posts && posts.slice(0, 3).map((post) => (
                        <Post post={post} />
                    ))}
                </ul>
            </C.Container>
        </C.Section>
    );
}

export default Blog;
