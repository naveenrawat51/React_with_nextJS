import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Client() {

    const clients = [
        {
            projectName: 'sprint',
            projectId: 123
        },
        {
            projectName: 'T-Mobile',
            projectId: 456
        }
    ]
    return (
        <div className={styles.container}>
            <h1>Client page</h1>

            <ul>
                {
                    clients.map((client) => {
                        return (
                            <li key={client.projectId}>
                                <Link href={{
                                    pathname: "/client/[id]",
                                    query: {
                                        id: client.projectId
                                    }
                                }}
                                // {`/client/${client.projectName}/${client.projectId}`}
                                >
                                    {client.projectName}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
