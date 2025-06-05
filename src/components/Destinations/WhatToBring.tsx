import React from 'react';

interface WhatToBringProps {
  items: string[];
}

const WhatToBring: React.FC<WhatToBringProps> = ({ items }) => {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default WhatToBring;
