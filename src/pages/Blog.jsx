import React, { useContext, useState } from 'react';
import { PostsContext } from '../contexts/postsContext';
import SinglePost from "../components/singlepost"
import Posts from '../components/blogPage/posts';
import { Route, Routes } from 'react-router-dom';
import BlogStructure from '../components/blog';
import ScrollToTop from '../utils/scrollToTop';

function Blog() {
  const { posts } = useContext(PostsContext);

  return (
    <BlogStructure>
      {(filteredPosts) => (
        <Routes>
          <Route index element={<Posts posts={filteredPosts} />} />
          <Route path=":slug" element={<SinglePost posts={filteredPosts} />} />
        </Routes>
      )}
    </BlogStructure>

  );
}


export default Blog;