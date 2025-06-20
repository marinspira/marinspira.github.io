import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { PostsContext } from '../contexts/postsContext';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 30px;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
`;

const MainContent = styled.div`
  flex: 3;
  max-width: 85%;
  width: 85%;

  li {
    list-style-type: disc;
    margin-bottom: 20px;
  }

  li::marker {
    color: var(--black); 
    font-size: 1.2em;
  }

  ul {
    padding-left: 1.5rem;
  }

  @media screen and (max-width: 992px) {
    max-width: 100%;
    width: 100%;
  }
`;

const Sidebar = styled.div`
  flex: 1;
  position: sticky;
  top: 0px;
  align-self: flex-start;
  max-height: 100vh;
  overflow-y: auto;

  span {
    color: var(--black);
    font-size: 16px;
    font-weight: 600;
  }

  ul {
    margin-top: 20px;
  }

  ul li a {
    color: var(--blue);
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const PostTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Poppins', sans-serif;
  font-size: 2.5em;
`;

const PostContent = styled.div`
  line-height: 1.6;
  h2, h3 {
    margin-top: 1.5rem;
  }
`;

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

function Post() {
    const { slug } = useParams();
    const { posts } = useContext(PostsContext);
    const [htmlContent, setHtmlContent] = useState('');
    const [toc, setToc] = useState([]);

    const singlePost = posts.find((p) => p.slug === slug);

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
        <Container>
            <ContentWrapper>
                <MainContent>
                    <PostTitle>{singlePost.title}</PostTitle>
                    <PostContent dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </MainContent>

                <Sidebar>
                    <span>Sumary</span>
                    <ul>
                        {toc.map(item => (
                            <li
                                key={item.id}
                                style={{
                                    marginLeft: item.level === 'H3' ? '1rem' : 0,
                                    marginBottom: '8px'
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
                </Sidebar>
            </ContentWrapper>
        </Container>
    );
}

export default Post;
