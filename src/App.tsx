import React from 'react';
import styles from './page.module.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.container}>
        <Home />
      </div>
      <Footer></Footer>
    </div> 
  );
}

export default App;
