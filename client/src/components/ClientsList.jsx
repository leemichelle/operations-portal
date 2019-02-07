import React from 'react';

const ClientsList = (props) => (
  <div>
    <span className="header">Customer List <br/>
    Please select one:
    </span>
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </tbody>
      <tbody>
        {props.companies.map((company, index) => (
        <tr key={company.id}>
        <input type="checkbox" 
                id={index} 
                onClick={props.setCompany}></input>
          <td>{ company.id }</td>
          <td>{ company.name }</td>
        </tr>
        ))}
      </tbody>
    </table>
    <input type="submit" 
            value="next" 
            className="next"
            onClick={props.toNextPage}></input>
  </div>
)

export default ClientsList;
