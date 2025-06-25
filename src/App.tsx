import styles from './App.module.css'

import Stocks from './Stocks'
import { getCurrentDate } from './Utilities/Utilities'

function App() {
  
  return (
    <>
      <Stocks />
      <div className={styles.container}>
        <h1>{getCurrentDate()}</h1>
      </div>
    </>
  )
}

export default App
