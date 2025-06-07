
import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  className?: string;
}

const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const stars = Array.from({ length: maxRating }, (_, index) => {
    const filled = index < Math.floor(rating);
    const halfFilled = index === Math.floor(rating) && rating % 1 !== 0;

    return (
      <Star
        key={index}
        className={`${sizeClasses[size]} ${
          filled ? 'fill-yellow-400 text-yellow-400' : 
          halfFilled ? 'fill-yellow-400/50 text-yellow-400' : 
          'text-gray-300'
        }`}
      />
    );
  });

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex">
        {stars}
      </div>
      {showValue && (
        <span className="text-sm text-gray-600 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default RatingStars;
