import React from 'react';

interface HighlightsProps {
  highlights: string[];
}

const Highlights: React.FC<HighlightsProps> = ({ highlights }) => {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {highlights.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Highlights;
