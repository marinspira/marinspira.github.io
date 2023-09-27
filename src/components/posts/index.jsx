import { useContext } from 'react';
import * as C from './styles';
import { PostsContext } from '../../contexts/postsContext';
import { renderHTML } from '../../utils/renderHtml';
import { limitText } from '../../utils/limitText';

function Blog() {

    const { posts } = useContext(PostsContext)

    return (
        <C.Section id="blog">
            <C.Container>
                <h2>Blog</h2>
                <ul>
                    {posts && posts.slice(0, 3).map((post) => (
                        <C.Post to={`/blog/${post.id}`} key={post.id}>
                            {post.labels && <label>{post.labels}</label>}
                            <C.Title>{post.title}</C.Title>
                            <div dangerouslySetInnerHTML={renderHTML(limitText(post.content, 150))} />
                        </C.Post>
                    ))}
                </ul>
            </C.Container>
        </C.Section>
    );
}

export default Blog;
