import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'

export default function PageNotFound() {
    const router = useRouter();
    console.log(router);
    return (
        <div className={styles.container}>
            <h1>Page not found</h1>
        </div>
    )
}
