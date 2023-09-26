import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './pages/Blog';
import Home from './pages/Home';
import { PostsProvider } from './contexts/postsContext';
import Post from './pages/SinglePost';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home
        />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/blog/:postId",
        element: <Post />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PostsProvider>
      <RouterProvider router={router} />
    </PostsProvider>
  </React.StrictMode>
);

reportWebVitals();
