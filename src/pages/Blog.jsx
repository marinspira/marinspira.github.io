import React, { useState, useContext, useEffect } from 'react';
import BlogContent from '../components/blogPage2';
import { PostsContext } from '../contexts/postsContext';

function Blog() {
    // const { posts } = useContext(PostsContext);
    // const [searchTerm, setSearchTerm] = useState('');

    // const filteredPosts = posts.filter(post => {
    //     const search = searchTerm.toLowerCase();
    //     return (
    //         post.title.toLowerCase().includes(search) ||
    //         post.content.toLowerCase().includes(search)
    //     );
    // });

    return (
        // <>
        //     <Search value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        //     <Posts posts={filteredPosts} />
        // </>
        <BlogContent/>
    );
}

export default Blog;
