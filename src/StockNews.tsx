import styles from './StockNews.module.css'
import { useEffect, useState } from 'react'

interface NewsItem {
  category: string
  datetime: number
  headline: string
  id: number
  image: string
  source: string
  summary: string
  url: string
}

function StockNews() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://finnhub.io/api/v1/news?category=general&token=${
          import.meta.env.VITE_FINNHUB_API_KEY
        }`
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Failed to fetch news')
        }
        const data = await response.json()
        setNews(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch news')
        console.error('Error fetching news:', err)
      }
    }
    fetchNews()
  }, [])

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <>
      <h1 className={styles.topNews}>Top News</h1>
      <div className={styles.container}>
        {news.length > 0 ? (
          news.slice(0, 15).map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className={styles.newsLink}>
              <div className={styles.cardContainer}>
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    className={styles.newsImage}
                  />
                )}
                <div className={styles.newsContent}>
                  <h2>{item.headline}</h2>
                  <div className={styles.source}>
                    <span>{item.source}</span>
                    <span>
                      {new Date(item.datetime * 1000).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className={styles.loading}>Loading news...</div>
        )}
      </div>
    </>
  )
}

export default StockNews
