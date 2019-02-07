import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ClientsList from './ClientsList.jsx';
import Products from './Products.jsx';
import Invoice from './Invoice.jsx';

class Operations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
      products: [], 
      companies: [],
      selectedItems: [],
      page: 'companies',
      total: 0
    }
    this.getClients = this.getClients.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.postInformation = this.postInformation.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.selectQuantity = this.selectQuantity.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.setCompany = this.setCompany.bind(this);
    this.toNextPage = this.toNextPage.bind(this);
  }

  componentDidMount() { 
    this.getClients();
    this.getProducts();
  }

  getClients() {
    axios.get('/api/clients')
    .then((response) => {
      this.setState({
        companies: response.data.rows
      });
    })
    .catch((error) => {
      console.log(error);
    })
  }

  getProducts() { 
    axios.get('/api/products')
      .then(response => {
        this.setState({
          products: response.data.rows
        });
      })
      .catch(error => {
        console.log(error)
      })
  }

  selectProduct(e) {
    let index = e.target.id;
    let currentProduct = this.state.products[index];
    currentProduct.color = currentProduct.color[0];
    currentProduct.size = currentProduct.size[0]
    this.setState({
      selectedItems: this.state.selectedItems.concat([currentProduct])
    });
  }

  selectColor(e) {
    let product = e.target.id;
    let color = e.target.value;
    this.state.selectedItems.map((item) => {
      if (item.title === product) {
        return item.color = color;
      }
    });
  }

  selectSize(e) {
    let product = e.target.id;
    let size = e.target.value;
    this.state.selectedItems.map((item) => {
      if (item.title === product) {
        return item.size = size;
      }
    });
  }

  selectQuantity(e) {
    let product = e.target.id;
    let quantity = e.target.value;
    this.state.selectedItems.map((item) => {
      if (item.title === product) {
        this.setState({
          total: this.state.total + (parseFloat(item.price) * parseFloat(quantity))
        });
        return item.quantity = quantity;
      }
    });
  }

  setCompany(e) {
    let index = e.target.id;
    let currentCompany = this.state.companies[index];
    this.setState({
      company: currentCompany,
    });
  }

  toNextPage() {
    if (this.state.page === 'companies') {
      this.setState({
        page: 'products'
      });
    } else if (this.state.page === 'products') {
      this.setState({
        page: 'invoice'
      });
    }
  }

  postInformation(e) {
    e.preventDefault();
  }

  renderPages() {
    switch(this.state.page) {
      case 'companies':
        return <ClientsList 
                companies={this.state.companies} 
                setCompany={this.setCompany} 
                toNextPage={this.toNextPage} />
      case 'products':
        return <Products 
                products={this.state.products} 
                selectProduct={this.selectProduct}  
                selectColor={this.selectColor} 
                selectQuantity={this.selectQuantity}
                selectSize={this.selectSize} 
                toNextPage={this.toNextPage} />
      case 'invoice':
        return <Invoice 
                company={this.state.company} 
                items={this.state.selectedItems} 
                total={this.state.total} />
    }
  }

  render() {
    return (
      <div>
      {this.renderPages()}
      </div>
    )
  }
}

export default Operations;