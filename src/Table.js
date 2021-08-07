import React from 'react';
import './table.css';

const Table = ({ countries }) => {
  return (
    <div className="table">
      {countries.map((country, i) => (
        <tr key={i}>
          <td>{country.country}</td>
          <td>{country.cases}</td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
