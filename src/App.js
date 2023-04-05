import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import styles from './styles.module.css'

function App () {
  return (
    <div className={styles.container}>
     {/* Top Div which includes Avatar, Headline, Sub Headline, and Icons */}
     <Header/>
     {/* Video Cards */}
     <Card/>
     {/* Footer */}
     <Footer/>
    </div>
  )
}

export default App
