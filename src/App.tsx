import styles from './App.module.css'

import Stocks from './Stocks'
import Weather from './Utilities/Weather'
import StockNews from './StockNews'
import { getCurrentDate } from './Utilities/Utilities'

function App() {


  return (
    <>
      <Stocks />
      <div className={styles.container}>
        <h1>{getCurrentDate()}</h1>
        <Weather/>
        <StockNews/>
      </div>
    </>
  )
}

export default App
