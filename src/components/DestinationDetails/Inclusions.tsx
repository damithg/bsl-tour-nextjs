import React from 'react';

interface InclusionsProps {
  inclusions: string[];
}

const Inclusions: React.FC<InclusionsProps> = ({ inclusions }) => {
  return (
    <ul className="list-disc list-inside space-y-2 text-gray-700">
      {inclusions.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Inclusions;
