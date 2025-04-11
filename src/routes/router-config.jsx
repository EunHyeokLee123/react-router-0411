import { createBrowserRouter } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import BlogPage from '../pages/BlogPage';
import AboutPage from '../pages/AboutPage';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import BlogPostDetail from '../pages/BlogPostDetail';

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
        // :postId -> 경로에 붙는 파라미터(/blog/1, /blog/2), 임의로 붙인 이름
        // blog/ 뒤에 뭐라도 붙어 있으면 이 페이지로 이동하겠다
        path: 'blog/:postId',
        element: <BlogPostDetail />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);
