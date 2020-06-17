import React from 'react';
import styles from './App.scss';
import List from '../List/list.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>A simple to-do app</h2>
        <List title={['Things to do ', <sup key="1">soon!</sup>]}
          heroImageSrc=
          {'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}>
          <p>
            I'm planning on doing all these things sooner, rather than later!
          </p>
        </List>
      </main>
    );
  }
}

export default App;
