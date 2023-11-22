
import styles from './page.module.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './pages/Menu';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.container}>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
        </Routes> 
      </div>
      <Footer></Footer>
    </div> 
  );
}

export default App;
