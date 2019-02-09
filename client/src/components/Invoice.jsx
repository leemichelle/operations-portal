import React from 'react';

const Invoice = (props) => (
  <div>
    <span>Invoice total for {props.company.name}</span> 
    <br/>
    <table>
      <tbody>
        <tr>
          <th>Item</th>
          <th>Color</th>
          <th>Size</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </tbody>
      <tbody>
        {props.items.map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>{item.color}</td>
            <td>{item.size}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <br/>
    <table>
      <tr>
        <th>Shipping Cost</th>
      </tr>
      <tr>
        <td>$50.00</td>
      </tr>
    </table>
    <br/>
    <div>Total: {`$${props.total + 50}`}</div>
  </div>
)

export default Invoice;