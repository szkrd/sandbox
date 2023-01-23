import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { RouterPaths } from '../routerPaths';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <div className={styles.links}>
          <Link to={RouterPaths.Landing}>Home</Link>
          <Link to={RouterPaths.SkeletonDemo}>Skeleton CSS</Link>
        </div>
      </nav>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
