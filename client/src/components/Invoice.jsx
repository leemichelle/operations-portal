import React from 'react';

const Invoice = (props) => (
  <div>
    <span>Invoice total for {props.company.name}</span> 
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
    <table>
      <tr>
        <th>Shipping Cost</th>
      </tr>
      <tr>
        <th>$50.00</th>
      </tr>
    </table>
    <div>Total: {`$${props.total + 50}`}</div>
  </div>
)

export default Invoice;