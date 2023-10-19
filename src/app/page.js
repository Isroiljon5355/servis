import Navbar from '@/components/navbar/Navbar'
import styles from './page.module.css'
import Card from '@/components/card/Card'
// import "../../global.css"
export default function Home() {
  return (
    <main className={styles.main}>
      <div className="relative min-h-screen bg-indigo-50 ">
        <Navbar/>
        <Card/>
      </div>
    </main>
  )
}
