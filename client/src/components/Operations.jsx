import React from 'react';
import axios from 'axios';

class Operations extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getClients();
    this.getProducts();
  }

  getClients() {
    axios.get('/api/clients')
    .then((response) => {
      // this.setState({
      //   companies: response.data.rows
      // });
      console.log(response.data.rows);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  getProducts() { //get products from db
    axios.get('/api/products')
      .then(response => {
        // this.setState({
        //   products: response.data.rows
        // });
        console.log(response.data.rows)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>Testing</div>
    )
  }
}

export default Operations;