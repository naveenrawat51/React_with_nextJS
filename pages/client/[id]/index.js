import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css'

export default function Project() {
    const router = useRouter();
    function loadProjectHandler() {
        // first way
        router.push({
            pathname: '/client/[id]/[projectId]',
            query: {
                id: 'sprint',
                projectId: 'abc'
            }
        });

        // second way
        // router.push('/client/naveen/001');
    }
    return (
        <div className={styles.container}>
            <h1>project for specific client with id</h1>
            <button onClick={loadProjectHandler}>Load a Project</button>
        </div>
    )
}
