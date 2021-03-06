import React from 'react';
import './table.css';
import numeral from 'numeral';

const Table = ({ countries }) => {
  return (
    <div className="table">
      {countries.map((country, i) => (
        <tr key={i}>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format('0,0')}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
