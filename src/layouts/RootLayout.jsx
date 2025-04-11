import React from 'react';
import styles from './RootLayout.module.scss';
import MainNav from '../components/MainNav';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.container}>
          <MainNav />
        </div>
      </header>

      <main className={styles.main}>
        {/* 바뀌는 부분(동적 컴포넌트)이 들어갈 자리 
        Outlet이 있는 위치로 공통 디자인이 아닌 요소(페이지 등)이 들어감.
        자식으로 설정된 컴포넌트들이 알맞은 경로일 때, Outlet에 드러남. */}
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2025 개발자 블로그. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
