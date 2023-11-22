
import { PageHeader } from '../components/PageHeader';
import styles from './home.module.css';

export function Home() {
    return (
        <div className={styles.homeContent}>
            <PageHeader />
            <main className={styles.homeMain}>
                
            </main>
            <footer className={styles.homeFooter}>
            </footer>
        </div>
    )
}