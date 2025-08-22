import styles from './App.module.css'

import TickerScroller from './TickerScroller'
import StockNews from './StockNews'
import { getCurrentDate } from './Utilities/Utilities'

function App() {
  return (
    <>
      <TickerScroller />
      <div className={styles.container}>
        <h1 className={styles.currentDate}>{getCurrentDate()}</h1>
        <StockNews/>
      </div>
    </>
  )
}

export default App
