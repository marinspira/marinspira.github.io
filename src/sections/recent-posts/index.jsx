import { useContext } from 'react';
import * as C from './styles';
import { PostsContext } from '../../contexts/postsContext';
import Post from '../../components/postCardItem';
import { Link } from 'react-router-dom';

function Blog({ title }) {

    const { posts } = useContext(PostsContext)

    return (
        <C.Section >
            <div className='container'>
                <C.Container id="blog">
                    <C.Wrapper>
                        <C.Title>{title}</C.Title>
                        <Link to="/blog">View all posts →</Link>
                    </C.Wrapper>
                    <ul>
                        {posts && posts.slice(0, 3).map((post, index) => (
                            <Post key={index} post={post} />
                        ))}
                    </ul>
                </C.Container>
            </div>
        </C.Section>
    );
}

export default Blog;
