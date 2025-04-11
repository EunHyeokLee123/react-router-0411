import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import BlogPage from '../pages/BlogPage';
import AboutPage from '../pages/AboutPage';
import RootLayout from '../layouts/RootLayout';

// Router 설정
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // RootLayout의 자식으로 blog, about이 들어감.
    children: [
      {
        // 부모경로가 활성화 되었을 때, 기본으로 사용할 컴포넌트라는 의미
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
