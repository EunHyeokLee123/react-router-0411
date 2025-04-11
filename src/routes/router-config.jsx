import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import BlogPage from '../pages/BlogPage';
import AboutPage from '../pages/AboutPage';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage';

// Router 설정
export const router = createBrowserRouter([
  {
    // 기본 레이아웃(RootLayout) 지정
    path: '/',
    element: <RootLayout />,
    // 에러 발생 시 드러날 페이지 지정
    errorElement: <ErrorPage />,
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
