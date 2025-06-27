import { useEffect, useState } from 'react'

function Weather() {
  const [weather, setWeather] = useState<{
    icon: string
    description: string
    temp: number
  } | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const zipCode = 13365

      const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }&units=imperial`

      const response = await fetch(url)
      const data = await response.json()
      setWeather({
        icon: data.weather[0].icon,
        description: data.weather[0].description,
        temp: Math.round(data.main.temp),
      })
    }

    fetchWeather()
  }, [])

  return (
    <>
      <p>
        {weather ? (
          <>
            <img
              src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
              alt="weather icon"
              style={{ verticalAlign: 'middle' }}
            />{' '}
            {weather.description} {weather.temp}º
          </>
        ) : (
          'Loading weather...'
        )}
      </p>
    </>
  )
}

export default Weather
