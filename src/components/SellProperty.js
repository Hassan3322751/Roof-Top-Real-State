import React, { useState } from 'react';

const SellPropertyForm = () => {
  const [property, setProperty] = useState({
    type: '',
    name: '',
    description: '',
    image: null,
    country: '',
    address: '',
    bedrooms: '',
    bathrooms: '',
    surface: '',
    year: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleFileChange = (e) => {
    setProperty({ ...property, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(property);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl font-bold mb-4">Sell Property</h2>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="type">Property Type</label>
        <input className="border rounded w-full p-2" type="text" name="type" value={property.type} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="name">Property Name</label>
        <input className="border rounded w-full p-2" type="text" name ="name" value={property.name} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="description">Description</label>
        <textarea className="border rounded w-full p-2" name="description" value={property.description} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="image">Upload Image</label>
        <input className="border rounded w-full p-2" type="file" name="image" onChange={handleFileChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="country">Country</label>
        <input className="border rounded w-full p-2" type="text" name="country" value={property.country} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="address">Address</label>
        <input className="border rounded w-full p-2" type="text" name="address" value={property.address} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="bedrooms">Bedrooms</label>
        <input className="border rounded w-full p-2" type="number" name="bedrooms" value={property.bedrooms} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="bathrooms">Bathrooms</label>
        <input className="border rounded w-full p-2" type="number" name="bathrooms" value={property.bathrooms} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="surface">Surface Area</label>
        <input className="border rounded w-full p-2" type="text" name="surface" value={property.surface} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="year">Year Built</label>
        <input className="border rounded w-full p-2" type="number" name="year" value={property.year} onChange={handleChange} required />
      </div>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="price">Price</label>
        <input className="border rounded w-full p-2" type="number" name="price" value={property.price} onChange={handleChange} required />
      </div>
      <button type="submit" className="bg-violet-700 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default SellPropertyForm;