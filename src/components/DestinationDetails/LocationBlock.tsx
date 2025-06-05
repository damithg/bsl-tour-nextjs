import React from 'react';

interface Location {
  Address?: string;
  Postcode?: string;
  Region?: string;
  Latitude?: number;
  Longitude?: number;
}

interface LocationBlockProps {
  location: Location;
}

const LocationBlock: React.FC<LocationBlockProps> = ({ location }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Location</h2>
      {location.Address && <p><strong>Address:</strong> {location.Address}</p>}
      {location.Postcode && <p><strong>Postcode:</strong> {location.Postcode}</p>}
      {location.Region && <p><strong>Region:</strong> {location.Region}</p>}
      {location.Latitude && location.Longitude && (
        <p>
          <strong>Coordinates:</strong> {location.Latitude}, {location.Longitude}
        </p>
      )}
    </div>
  );
};

export default LocationBlock;
