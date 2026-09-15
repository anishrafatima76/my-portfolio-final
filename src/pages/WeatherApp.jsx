import { useState } from "react";

export default function Weather() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const searchWeather = async () => {

        if (city.trim() === "") {
            setError("Please enter a city name.");
            return;
        }

        setLoading(true);
        setError("");
        setWeather(null);

        try {

            const API_KEY = "ba2b3fa1ba6413e20121c96930c1d65f";

            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            );

            const data = await response.json();

            if (data.cod !== 200) {
                setError("City not found. Please check the city name.");
                setLoading(false);
                return;
            }

            setWeather(data);

        } catch (error) {

            setError("Something went wrong. Please try again.");

        }

        setLoading(false);
    };


    const formatTime = (timestamp) => {

        return new Date(timestamp * 1000).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

    };


    return (
        <div className="weather-page">

            <div className="weather-container">

                {/* HEADER */}

                <div className="weather-header">

                    <p className="weather-label">
                        LIVE WEATHER
                    </p>

                    <h1>
                        Weather <span>App.</span>
                    </h1>

                    <p>
                        Search any city and explore its current weather.
                    </p>

                </div>


                {/* SEARCH */}

                <div className="weather-search">

                    <input
                        type="text"
                        placeholder="Enter city name..."
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchWeather();
                            }
                        }}
                    />

                    <button onClick={searchWeather}>
                        Search
                    </button>

                </div>


                {/* LOADING */}

                {loading && (
                    <div className="weather-message">
                        Loading weather...
                    </div>
                )}


                {/* ERROR */}

                {error && (
                    <div className="weather-error">
                        {error}
                    </div>
                )}


                {/* WEATHER DATA */}

                {weather && (

                    <div className="weather-result">

                        {/* MAIN WEATHER */}

                        <div className="weather-main">

                            <div>

                                <p className="weather-location">
                                    {weather.name}, {weather.sys.country}
                                </p>

                                <h2>
                                    {Math.round(weather.main.temp)}°C
                                </h2>

                                <p className="weather-condition">
                                    {weather.weather[0].main}
                                </p>

                                <p className="weather-description">
                                    {weather.weather[0].description}
                                </p>

                            </div>


                            <img
                                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                                alt={weather.weather[0].description}
                            />

                        </div>


                        {/* WEATHER DETAILS */}

                        <div className="weather-details">

                            <div className="weather-detail-card">
                                <span>Feels Like</span>
                                <strong>
                                    {Math.round(weather.main.feels_like)}°C
                                </strong>
                            </div>


                            <div className="weather-detail-card">
                                <span>Humidity</span>
                                <strong>
                                    {weather.main.humidity}%
                                </strong>
                            </div>


                            <div className="weather-detail-card">
                                <span>Wind Speed</span>
                                <strong>
                                    {weather.wind.speed} m/s
                                </strong>
                            </div>


                            <div className="weather-detail-card">
                                <span>Pressure</span>
                                <strong>
                                    {weather.main.pressure} hPa
                                </strong>
                            </div>


                            <div className="weather-detail-card">
                                <span>Visibility</span>
                                <strong>
                                    {(weather.visibility / 1000).toFixed(1)} km
                                </strong>
                            </div>


                            <div className="weather-detail-card">
                                <span>Cloudiness</span>
                                <strong>
                                    {weather.clouds.all}%
                                </strong>
                            </div>

                        </div>


                        {/* EXTRA INFORMATION */}

                        <div className="weather-extra">

                            <div>
                                <span>Min Temperature</span>
                                <strong>
                                    {Math.round(weather.main.temp_min)}°C
                                </strong>
                            </div>

                            <div>
                                <span>Max Temperature</span>
                                <strong>
                                    {Math.round(weather.main.temp_max)}°C
                                </strong>
                            </div>

                            <div>
                                <span>Sunrise</span>
                                <strong>
                                    {formatTime(weather.sys.sunrise)}
                                </strong>
                            </div>

                            <div>
                                <span>Sunset</span>
                                <strong>
                                    {formatTime(weather.sys.sunset)}
                                </strong>
                            </div>

                        </div>

                    </div>

                )}

            </div>

        </div>
    );
}