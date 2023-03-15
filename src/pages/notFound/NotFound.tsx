import React from 'react';

import styles from './NotFound.module.scss';

class NotFound extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <h1 className={styles.main_title}>Page Not Found</h1>
        <h2 className={styles.main_subtitle}>Error 404</h2>
      </main>
    );
  }
}

export default NotFound;
