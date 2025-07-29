import React from "react";

const vehicles = [
  { id: 1, model: 'Mustang', manufacturer: 'Ford', year: 1960, fuelType: 'Petrol' },
  { id: 2, model: 'Model X', manufacturer: 'Tesla', year: 2024, fuelType: 'Electric' },
  { id: 3, model: 'I8', manufacturer: 'BMW', year: 1960, fuelType: 'Hybrid' },
  { id: 4, model: 'Supra', manufacturer: 'Toyota', year: 2020, fuelType: 'Petrol' },
  { id: 5, model: 'Skyline', manufacturer: 'Nissan', year: 1999, fuelType: 'Petrol' },
];

function VehicleCardInfo(){
  const cardStyle = {
    border: '1px solid #add',
    borderRadius: '8px',
    padding: '16px',
    margin: '19px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    width: '200px',
    transition: 'transform 0.3s ease-in-out',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: '20px',
    marginTop: '30px',
  };

  const headingStyle = {
    fontSize: '20px',
  };

  const detailStyle = {
    marginBottom: '5px',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} style={cardStyle}>
          <div style={headingStyle}>{vehicle.model}</div>
          <div style={detailStyle}>Manufacturer: {vehicle.manufacturer}</div>
          <div style={detailStyle}>Year: {vehicle.year}</div>
          <div style={detailStyle}>Fuel Type: {vehicle.fuelType}</div>
        </div>
      ))}
    </div>
  );
};

export default VehicleCardInfo;
