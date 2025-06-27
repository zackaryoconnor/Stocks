import styles from './StockNews.module.css'
import { useEffect, useState } from 'react'

function StockNews() {
  const [news, setNews] = useState<
    {
      category: string
      datetime: Date
      headline: string
      id: number
      image: string
      source: string
      summary: string
      url: string
    }[]
  >([])

  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://finnhub.io/api/v1/news?category=general&token=${
        import.meta.env.VITE_FINNHUB_API_KEY
      }`

      const response = await fetch(url)
      const data = await response.json()
      setNews(data)
    }
    console.log(news)
    fetchNews()
  }, [])

  return (
    <>
      <h1 className={styles.topNews}>Top News</h1>
      <div className={styles.container}>
          {news.length > 0 ? (
            news.slice(0, 10).map((item) => (
              <div
                key={item.id}
                className={styles.cardContainer}>
                {item.image && (
                  <img
                    src={item.image}
                    alt=""
                    style={{ width: '100%' }}
                  />
                )}
                <div className="sourcePosted">
                  {item.source}
                  {new Date(item.datetime * 1000).toLocaleDateString()}
                </div>
                <h3>{item.headline}</h3>
                <p>{item.summary}</p>
              </div>
            ))
          ) : (
            <div>Loading news...</div>
          )}
      </div>
    </>
  )
}

export default StockNews
