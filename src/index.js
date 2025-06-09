import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { PostsProvider } from './contexts/postsContext';
import Post from './pages/SinglePost';
import ScrollToTop from './utils/scrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostsProvider>
      <HashRouter>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<Post />} />
          </Route>
        </Routes>
      </HashRouter>
    </PostsProvider>
  </React.StrictMode>
);


reportWebVitals();
