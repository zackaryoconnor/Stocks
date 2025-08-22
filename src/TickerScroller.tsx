import { useEffect, useState } from 'react'
import styles from './TickerScroller.module.css'

interface Stock {
  symbol: string
  name: string
  price: number
  change: number
}

interface SymbolResponse {
  symbol: string
  name: string
  displaySymbol: string
  description: string
}

interface QuoteResponse {
  c: number // Current price
  dp: number // Percent change
}

function TickerScroller() {
  const [stocks, setStocks] = useState<Stock[]>([])
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const baseURL = 'https://finnhub.io/api/v1'
        const apiKey = import.meta.env.VITE_FINNHUB_API_KEY
        const numberOfStocks = 15

        const symbolsResponse = await fetch(
          `${baseURL}/stock/symbol?exchange=US&mic=XNYS&token=${apiKey}`
        )

        const symbolsData: SymbolResponse[] = await symbolsResponse.json()
        const topStocks = symbolsData.slice(0, numberOfStocks)

        const stocksWithPrices = await Promise.all(
          topStocks.map(async (stock) => {
            const quoteResponse = await fetch(
              `${baseURL}/quote?symbol=${stock.symbol}&token=${apiKey}`
            )
            const quote: QuoteResponse = await quoteResponse.json()
            return {
              symbol: stock.symbol,
              name: stock.description,
              price: quote.c || 0,
              change: quote.dp || 0,
            }
          })
        )

        setStocks(stocksWithPrices)

      } catch (error) {
        console.error('Error fetching stocks:', error)
      }
    }

    fetchStocks()

    // const interval = setInterval(fetchStocks, 10000)

    // return () => clearInterval(interval)
  }, [])

  const content = prefersReducedMotion
    ? stocks
    : [...stocks, ...stocks, ...stocks]

  

  return (
    <div
      className={styles.scroller}
      data-animated="true">
      <ul className={styles.scrollerInner}>
        {content.map((stock, index) => (
          <li
            key={`${stock.symbol}-${index}`}
            className={`${styles.card} ${
              stock.change >= 0 ? styles.positive : styles.negative
            }`}>
            <div className={styles.name}>
              <h3>{stock.symbol}</h3>
              <p>{stock.name}</p>
            </div>
            <div className={styles.price}>
              <p>${stock.price.toFixed(2)}</p>
              <p className={styles.change}>
                {stock.change >= 0 ? '+' : ''}
                {stock.change.toFixed(2)}%
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TickerScroller
