import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

function Post({ postId }) {

    const [post, setPost] = useState('')

    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/blogger/v3/blogs/${process.env.REACT_APP_blogId}/pages/${postId}?key=${process.env.REACT_APP_APIKey}`)
            .then((res) => setPost(res))
            .catch((error) => console.error(error))
    })

    return (
        <div>
        </div>
    );
}

export default Post;