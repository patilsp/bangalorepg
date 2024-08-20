"use client"

import { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';

const PropertyTabs = ({ properties }) => {
  const [selectedType, setSelectedType] = useState('All');

  // Get unique property types for tabs
  const propertyTypes = ['All', ...new Set(properties.map(p => p.type))];

  // Filter properties based on the selected type
  const filteredProperties = selectedType === 'All'
    ? properties
    : properties.filter(p => p.type === selectedType);

  return (
    <div>
      {/* Tabs */}
      <div className='flex space-x-4 border-b border-gray-200'>
        {propertyTypes.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`py-2 px-4 text-sm font-medium ${selectedType === type ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Property Cards */}
      <div className='mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filteredProperties.map(property => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyTabs;
