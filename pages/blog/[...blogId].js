import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css'

export default function Home() {

    console.log('blog router:  ', useRouter());
  return (
    <div className={styles.container}>
      <h1>blog with id</h1>
    </div>
  )
}
