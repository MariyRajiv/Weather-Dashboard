import React from 'react';
import { Star } from 'lucide-react';

interface FavoritesListProps {
  favorites: string[];
  onSelectCity: (city: string) => void;
  onRemoveCity: (city: string) => void;
}

export const FavoritesList: React.FC<FavoritesListProps> = ({
  favorites,
  onSelectCity,
  onRemoveCity,
}) => {
  if (favorites.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-wrap gap-2 justify-center">
        {favorites.map((city) => (
          <div
            key={city}
            className="flex items-center bg-white bg-opacity-90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <button
              onClick={() => onSelectCity(city)}
              className="text-gray-700 hover:text-gray-900 font-medium"
            >
              {city}
            </button>
            <button
              onClick={() => onRemoveCity(city)}
              className="ml-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
            >
              <Star size={16} fill="currentColor" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};