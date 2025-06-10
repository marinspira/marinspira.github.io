import React, { useState, useContext, useEffect } from 'react';
import Search from '../components/blogPage/search';
import Posts from '../components/blogPage/posts';
import { PostsContext } from '../contexts/postsContext';

function Blog() {
    const { posts } = useContext(PostsContext);
    const [searchTerm, setSearchTerm] = useState('');

    // useEffect(() => {
    //     console.log(searchTerm)
    // }, [searchTerm])

    const filteredPosts = posts.filter(post => {
        const search = searchTerm.toLowerCase();
        return (
            post.title.toLowerCase().includes(search) ||
            post.content.toLowerCase().includes(search)
        );
    });

    console.log(filteredPosts)

    return (
        <>
            <Search value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <Posts posts={filteredPosts} />
        </>
    );
}

export default Blog;
