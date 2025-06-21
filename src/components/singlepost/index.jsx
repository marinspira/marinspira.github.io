import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import * as C from './styles';
import { PostsContext } from '../../contexts/postsContext';
import {HeaderVisibilityContext} from "../../contexts/headerVisibilityContext"

function Post() {
    const { slug } = useParams();
    const { posts } = useContext(PostsContext);
    const [htmlContent, setHtmlContent] = useState('');
    const [toc, setToc] = useState([]);
    const { showHeader, setScrollContainer } = useContext(HeaderVisibilityContext);

    const scrollRef = useRef(null);
console.log("aqui", showHeader)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (scrollRef.current) {
                setScrollContainer(scrollRef.current);
            }
        }, 0);
    
        return () => clearTimeout(timeout);
    }, [setScrollContainer]);
      

    const singlePost = posts.find((p) => p.slug === slug);

    function processHtmlContent(htmlString) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
  
      const firstImg = doc.querySelector('img');
      if (firstImg) firstImg.remove();
  
      const headings = doc.querySelectorAll('h2, h3');
      headings.forEach((heading, index) => {
          if (!heading.id) {
              heading.id = `heading-${index}`;
          }
      });
  
      return doc.body.innerHTML;
  }

    useEffect(() => {
        if (singlePost) {
            const processedHtml = processHtmlContent(singlePost.content);
            setHtmlContent(processedHtml);

            const parser = new DOMParser();
            const doc = parser.parseFromString(processedHtml, 'text/html');
            const headings = Array.from(doc.querySelectorAll('h2, h3'));

            const tocItems = headings.map((heading, index) => ({
                id: heading.id,
                text: heading.textContent,
                level: heading.tagName
            }));

            setToc(tocItems);
        }
    }, [singlePost]);

    useEffect(() => {
        const hashParts = window.location.hash.split('#');
        const id = hashParts.length > 2 ? hashParts[2] : null;

        if (id) {
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [htmlContent]);

    if (!singlePost) return <p>Loading...</p>;

    return (
        <C.Container ref={scrollRef}>
            <C.ContentWrapper>
                <C.MainContent>
                    <C.PostTitle>{singlePost.title}</C.PostTitle>
                    <C.PostContent dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </C.MainContent>
 
                <C.Sidebar visible={showHeader}>
                    <span>Sumary</span>
                    <ul>
                        {toc.map(item => (
                            <li
                                key={item.id}
                                style={{
                                    marginLeft: item.level === 'H3' ? '1rem' : 0,
                                }}
                            >
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        const target = document.getElementById(item.id);
                                        if (target) {
                                            target.scrollIntoView({ behavior: 'smooth' });
                                            window.history.replaceState(null, '', `#/blog/${slug}#${item.id}`);
                                        }
                                    }}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </C.Sidebar>
            </C.ContentWrapper>
        </C.Container>
    );
}

export default Post;