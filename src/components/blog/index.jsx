import React, { useState, useEffect } from 'react';
import * as C from './styles';
import axios from 'axios';

function Blog() {
    const [posts, setPosts] = useState([]);
    const APIKey = 'AIzaSyBViz1R10z5PVCAQjcYhDcFgAqnTezVKkM';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://www.googleapis.com/blogger/v3/blogs/3492150670313460555/posts?key=${APIKey}`
                );
                setPosts(response.data.items);
            } catch (error) {
                console.error('Erro ao buscar posts do Blogger:', error);
            }
        };

        fetchData();
    }, []);

    const limitText = (text, limit) => {
        if (text.length <= limit) {
            return text;
        }
        return text.slice(0, limit) + '...';
    };

    const renderHTML = (htmlString) => {
        return { __html: htmlString };
    };

    return (
        <C.Section id="blog">
            <C.Container>
                <h2>Blog</h2>
                <ul>
                    {posts.slice(0, 3).map((post) => (
                        <C.Post key={post.id}>
                            <label>{post.labels}</label>
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
