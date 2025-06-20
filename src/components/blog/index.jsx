import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from "./styles.module.css"
import Search from '../blogPage/search';
import { useNavigate } from 'react-router-dom';
import { HeaderVisibilityContext } from '../../contexts/headerVisibilityContext';
import { PostsContext } from '../../contexts/postsContext';

function BlogStructure({ children }) {

    const { posts } = useContext(PostsContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState(null);

    const { showHeader } = useContext(HeaderVisibilityContext);

    const navigate = useNavigate();

    const handleTagClick = (tag) => {
        setSelectedTag(prev => prev === tag ? null : tag);
        setSearchTerm('');
        navigate('/blog');
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
                {typeof children === 'function' ? children(filteredPosts) : children}
            </div>
        </div>
    );
}

export default BlogStructure;