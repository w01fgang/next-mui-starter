import React from 'react';

export const carOptions = [
  { title: 'Add Custom Modal', comp: () => <p style={{ fontWeight: 'bold', color: '#1E88E5' }}>Add Custom Modal</p>, value: 'custom' },
  { title: 'A220', comp: () => <p>A220</p>, value: 1974 },
  { title: 'A220 4MATIC', comp: () => <p>A220 4MATIC</p>, value: 2008 },
  { title: 'C300', comp: () => <p>C300</p>, value: 1957 },
  { title: 'GLS 450', comp: () => <p>GLS 450</p>, value: 1993 },
];
export const brandOptions = [
  { title: 'Add Custom Brand', comp: () => <p style={{ fontWeight: 'bold', color: '#1E88E5' }}>Add Custom Brand</p>, value: 'custom' },
  { title: 'Acura', comp: () => <p>Acura</p>, value: 1974 },
  { title: 'BMW', comp: () => <p>BMW</p>, value: 2008 },
  { title: 'Cirtoen', comp: () => <p>Cirtoen</p>, value: 1957 },
  { title: 'Dodge', comp: () => <p>Dodge</p>, value: 1993 },
];

export const bodyTypeOptions = [
  { title: 'Wagon/Estate', comp: () => <p>Wagon/Estate</p>, value: 1974 },
  { title: 'Passenger Van', comp: () => <p>Passenger Van</p>, value: 2008 },
  { title: 'Sedan/Limousine', comp: () => <p>Sedan/Limousine</p>, value: 1957 },
  { title: 'Convertible', comp: () => <p>Convertible</p>, value: 1993 },
  { title: 'Sport', comp: () => <p>Sport</p>, value: 19932 },
  { title: 'SUV / 4x4', comp: () => <p>SUV / 4x4</p>, value: 19293 },
];

const colorsSet = [
  { title: 'Black', value: '#455A64' },
  { title: 'Gray', value: '#CED4DA' },
  { title: 'Red', value: '#FC4B6C' },
  { title: 'Green', value: '#FC4B6C' },
  { title: 'Blue', value: '#1E88E5' },
  { title: 'Dark Red', value: '#BD2F4A' },
  { title: 'Dark Green', value: '#158246' },
  { title: 'Dark Blue', value: '#1C5486' },
  { title: 'Dark Gray', value: '#8B969C' },
  { title: 'Yellow', value: '#FDF546' },
  { title: 'Orange', value: '#F2994A' },
  { title: 'Pink', value: '#FB24FF' },
  { title: 'Purple', value: '#9B51E0' },
];

export const colorOption = colorsSet.map(({ title, value }) => ({
  title,
  comp: () => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span style={{
        width: 20,
        height: 12,
        background: value,
        border: `1px solid ${value}`,
        boxSizing: 'border-box',
        borderRadius: 20,
        marginRight: 8,
      }}
      />
      {title}
    </div>
  ),
}));

const currentYear = new Date().getFullYear() + 1;

export const YearOptions = Array(40).fill().map((item, index) => ({
  title: `${currentYear - index}`, comp: () => <p>{currentYear - index}</p>, value: currentYear - index,
}));

export const locationOptions = [
  { title: 'Add Your Location', comp: () => <p style={{ fontWeight: 'bold', color: '#1E88E5' }}>Add Your Location</p>, value: 'custom' },
];

export const fuelTypeOptions = [
  { title: 'Diesel', comp: () => <p>Diesel</p>, value: 'Diesel' },
  { title: 'Petrol', comp: () => <p>Petrol</p>, value: 'Petrol' },
  { title: 'Electric', comp: () => <p>Electric</p>, value: 'Electric' },
  { title: 'GPL', comp: () => <p>GPL</p>, value: 'GPL' },
  { title: 'Hybrid', comp: () => <p>Hybrid</p>, value: 'Hybrid' },
];

export const transmissionOptions = [
  { title: 'Automatic', comp: () => <p>Automatic</p>, value: 'Automatic' },
  { title: 'Manual', comp: () => <p>Manual</p>, value: 'Manual' },
];

export const passengersOptions = Array(8).fill().map((item, index) => ({
  title: `${1 + index}`, comp: () => <p>{1 + index}</p>, value: 1 + index,
}));
