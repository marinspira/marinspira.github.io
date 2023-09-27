import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { renderHTML } from '../utils/renderHtml';

import styled from 'styled-components';

const Container = styled.div`
  padding: 150px 10px;
  max-width: 1000px;
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

function Post() {
    const [singlePost, setSinglePost] = useState(null);
    const { postId } = useParams();

    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_blogId}/posts/${postId}?key=${process.env.REACT_APP_APIKey}`)
            .then((res) => {
                setSinglePost(res.data);
            })
            .catch((error) => console.error(error));
    }, [postId]);

    return (
        <Container>
            {singlePost ? (
                <div>
                    <h2>{singlePost.title}</h2>
                    <PostContent dangerouslySetInnerHTML={renderHTML(singlePost.content)} />
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </Container>
    );
}

export default Post;
