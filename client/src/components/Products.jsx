import React from 'react';

const Products = (props) => (
  <div> Products Page <br/>
  Select all that may apply:
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Title</th>
          <th>Color</th>
          <th>Size</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </tbody>
      <tbody>
        {props.products.map((product, index) => (
        <tr key = {product.id}>
        <input type="checkbox" 
                id={index} 
                onClick={props.selectProduct}></input>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td>
            <select id={product.title} onChange={props.selectColor}>
              {product.color.map((color, index) => (
                <option key={index}>{color}</option>
              ))}
            </select>
            </td>
          <td>
            <select id={product.title} onChange={props.selectSize}>
              {product.size.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </select>
          </td>
          <td>{product.price}</td>
          <input type="text" 
                  id={product.title} 
                  onChange={props.selectQuantity}></input>
        </tr>
        ))}
      </tbody>
    </table>
    <input type="submit" 
            className="next"
            onClick={props.toNextPage}></input>
  </div>
)

export default Products;