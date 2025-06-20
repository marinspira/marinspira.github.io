import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from "./styles.module.css"
import { PostsContext } from '../../contexts/postsContext';
import SinglePost from "../../pages/SinglePost"
import Search from '../blogPage/search';
import Posts from '../blogPage/posts';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { HeaderVisibilityContext } from '../../contexts/headerVisibilityContext';

function BlogContent() {

    const { posts } = useContext(PostsContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState(null);

    const { showHeader, setScrollContainer } = useContext(HeaderVisibilityContext);

    const scrollRef = useRef(null);

    useEffect(() => {
        setScrollContainer(scrollRef.current);
    }, [setScrollContainer]);

    const navigate = useNavigate();

    const handleTagClick = (tag) => {
        setSelectedTag(prev => prev === tag ? null : tag);
        setSearchTerm('');
        navigate('.');
    };

    const allTags = [...new Set(posts.flatMap(post => post.labels || []))];

    const filteredPosts = posts.filter(post => {
        const search = searchTerm.toLowerCase();
        const matchesSearch = (
            post.title.toLowerCase().includes(search) ||
            post.content.toLowerCase().includes(search)
        );

        const matchesTag = selectedTag
            ? post.labels?.includes(selectedTag)
            : true;

        return matchesSearch && matchesTag;
    });

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={`${styles.sideBar} ${!showHeader ? styles.hiddenSidebar : ''}`}>
                    <Search value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    <ul>
                        {allTags.map(tag => (
                            <li
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className={selectedTag === tag ? styles.activeTag : styles.tag}
                            >
                                <span>{tag}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.postArea} ref={scrollRef}>
                    <Routes>
                        <Route index element={<Posts posts={filteredPosts} />} />
                        <Route path=":slug" element={<SinglePost posts={posts} />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default BlogContent;