import React, { useState } from 'react'

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY

export default function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(e) {
    e && e.preventDefault()
    if (!city) return
    setLoading(true)
    setError(null)
    setWeather(null)
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&lang=pt_br&appid=${API_KEY}`
      const res = await fetch(url)
      if (!res.ok) throw new Error('Cidade não encontrada')
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError(err.message || 'Erro ao buscar clima')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="weather-app">
      <header className="wa-header">
        <h1>Weather App</h1>
        <p>Busque o clima atual por cidade (OpenWeatherMap)</p>
      </header>

      <form className="wa-form" onSubmit={handleSearch}>
        <input
          placeholder="Digite uma cidade (ex: Salvador)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          aria-label="cidade"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </form>

      {error && <p className="wa-error">{error}</p>}

      {weather && (
        <main className="wa-result">
          <h2>
            {weather.name}, {weather.sys?.country}
          </h2>
          <div className="wa-main">
            <div className="wa-temp">{Math.round(weather.main.temp)}°C</div>
            <div className="wa-desc">{weather.weather[0].description}</div>
            <div className="wa-extra">Umidade: {weather.main.humidity}%</div>
          </div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
        </main>
      )}

      <footer className="wa-footer">Chave: environment variable <code>VITE_OPENWEATHER_KEY</code></footer>
    </div>
  )
}
