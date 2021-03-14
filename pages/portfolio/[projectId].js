import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'

export default function Home() {
    const router = useRouter();
    console.log(router);
    return (
        <div className={styles.container}>
            <h1>project id page</h1>
        </div>
    )
}
