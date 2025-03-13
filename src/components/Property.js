import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import {housesData} from "../data";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = housesData.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <img src={property.imageLg} alt={property.name} className="w-full h-64 object-cover rounded-lg" />
      </div>
      <h1 className="text-3xl font-bold text-primary mb-2">{property.name}</h1>
      <p className="text-gray-600 mb-4">{property.description}</p>
      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="text-secondary mr-2" />
        <span className="text-gray-700">{property.address}, {property.country}</span>
      </div>
      <div className="flex items-center mb-4">
        <FaPhoneAlt className="text-secondary mr-2" />
        <span className="text-gray-700">{property.agent.phone}</span>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-bold">Bedrooms</h2>
            <p>{property.bedrooms}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-bold">Bathrooms</h2>
            <p>{property.bathrooms}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-bold">Surface Area</h2>
            <p>{property.surface}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="font-bold">Year Built</h2>
            <p>{property.year}</p>
        </div>
        </div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-2xl font-bold text-primary">${property.price}</span>
        <button className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
          Add to Cart
        </button>
      </div>
      <div className="flex items-center">
        <img src={property.agent.image} alt={property.agent.name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="font-bold">{property.agent.name}</h3>
          <p className="text-gray-600">Agent</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;