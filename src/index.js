import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { PostsProvider } from './contexts/postsContext';
import ScrollToTop from './utils/scrollToTop';
import { HeaderVisibilityProvider } from './contexts/headerVisibilityContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderVisibilityProvider>
      <PostsProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              {/* <Route path="blog/*" element={<Blog />} /> */}
            </Route>
          </Routes>
        </HashRouter>
      </PostsProvider>
    </HeaderVisibilityProvider>
  </React.StrictMode>
);


reportWebVitals();
