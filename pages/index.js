import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <ul>
        <li>
          <Link href="/portfolio">portfolio</Link>
        </li>
        <li>
        <Link href="/client/123">client</Link>
        </li>
      </ul>
    </div>
  )
}
