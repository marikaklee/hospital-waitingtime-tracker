import React from 'react';

const TableComponent = ({ data, headers }) => {
  // const headers = Object.keys(data[0]);
  const rows = data.map(item => Object.values(item));
  console.log(rows);
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {headers.map(header => <th key={header}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => {
          if (row[0].Island == "Oahu"){
            return(
              <tr key={index}>
                <td>{row[0].Name}</td>
                <td>{row[0].Mailing_Address}</td>
                <td>{row[0].Licensed_Beds}</td>
                <td>{row[0].Critical_Access_Hospital_}</td>
                <td>{row[0].Phone_Number}</td>
                <td>{row[0].Website}</td>
              </tr>);
          }
          
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
