import React, { useContext, useState } from 'react';
import styles from "./styles.module.css"
import { PostsContext } from '../../contexts/postsContext';
import Search from '../blogPage/search';
import Posts from '../blogPage/posts';

function BlogContent() {

    const { posts } = useContext(PostsContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState(null);

    console.log(posts)

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
                <div className={styles.sideBar}>
                    <Search value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    <ul>
                        {allTags.map(tag => (
                            <li
                                key={tag}
                                onClick={() => setSelectedTag(prev => prev === tag ? null : tag)}
                                className={selectedTag === tag ? styles.activeTag : styles.tag}
                            >
                                <span>{tag}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.postArea}>
                    <Posts posts={filteredPosts} />
                </div>
            </div>
        </div>
    );
}

export default BlogContent;