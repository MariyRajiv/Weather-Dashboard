import React from 'react';
import { Cloud, Droplets, Star, Wind } from 'lucide-react';
import type { WeatherData } from '../types';
import { ForecastGraph } from './ForecastGraph';

interface WeatherCardProps {
  weather: WeatherData;
  isFavorite: boolean;
  onToggleFavorite: (city: string) => void;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{weather.city}</h2>
          <p className="text-gray-600">{weather.description}</p>
        </div>
        <button
          onClick={() => onToggleFavorite(weather.city)}
          className={`p-2 rounded-full transition-all transform hover:scale-110 group relative ${
            isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'
          }`}
          title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Star 
            size={24} 
            fill={isFavorite ? 'currentColor' : 'none'} 
            className="transition-transform duration-200 ease-in-out"
          />
          <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          </span>
        </button>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            className="w-20 h-20"
          />
          <span className="text-5xl font-bold text-gray-900">
            {Math.round(weather.temperature)}°C
          </span>
        </div>
      </div>

      <div className="flex items-center justify-around p-4 bg-gray-50 rounded-lg mb-6">
        <div className="flex items-center">
          <Cloud className="text-gray-600 mr-2" />
          <div className="text-sm">
            <p className="font-medium text-gray-900">{weather.description}</p>
            <p className="text-gray-600">Conditions</p>
          </div>
        </div>
        <div className="flex items-center">
          <Droplets className="text-blue-500 mr-2" />
          <div className="text-sm">
            <p className="font-medium text-gray-900">{weather.humidity}%</p>
            <p className="text-gray-600">Humidity</p>
          </div>
        </div>
        <div className="flex items-center">
          <Wind className="text-green-500 mr-2" />
          <div className="text-sm">
            <p className="font-medium text-gray-900">{weather.windSpeed} m/s</p>
            <p className="text-gray-600">Wind Speed</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">5-Day Forecast</h3>
        <ForecastGraph forecast={weather.forecast} />
      </div>
    </div>
  );
};