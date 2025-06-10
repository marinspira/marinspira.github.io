import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { renderHTML } from '../utils/renderHtml';

import styled from 'styled-components';
import { PostsContext } from '../contexts/postsContext';
import Blog from '../sections/sectionPostCards';

const Container = styled.div`
  padding: 150px 10px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0 auto;
  gap: 30px;

  div {
    width: 100%;
  }
`

const PostContent = styled.div`

blockquote {
    background-color: #f7f7f7;
    border-left: 4px solid #333;
    padding: 30px;
    margin: 20px 0;
    font-size: 16px;
    font-family: monospace;
  }
`

function removeFirstImage(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const firstImg = doc.querySelector('img');

    if (firstImg) {
        firstImg.remove();
    }

    return doc.body.innerHTML;
}

function Post() {
    const { slug } = useParams();
    const { posts } = useContext(PostsContext);

    const singlePost = posts.find((p) => p.slug === slug);

    if (!singlePost) return <p>Loading...</p>;

    return (
        <>
        <Container>
            {singlePost ? (
                <div>
                    <h2>{singlePost.title}</h2>
                    <PostContent dangerouslySetInnerHTML={{ __html: removeFirstImage(singlePost.content) }} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </Container>
        <Blog title="Recent posts"/>
        </>
    );
}

export default Post;
