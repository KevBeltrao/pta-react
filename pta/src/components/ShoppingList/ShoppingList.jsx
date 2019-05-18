import React, { Component } from 'react';
import Product from '../Product/Product';

class ShoppingList extends Component {
  state = { 
    items: [
      {
        name: 'Arroz',
        price: 3.22,
        code: 48902,
        img: 'https://www.supernossoemcasa.com.br/e-commerce/api/doc/produto/104716/img/main_image/0/104716.jpg?width=800&height=800'
      },
      {
        name: 'Feijão',
        price: 5.12,
        code: 48903,
        img: 'https://www.deliveryextra.com.br/img/uploads/1/30/566030.png?type=product'
      },
      {
        name: 'Batata',
        price: 3.13,
        code: 48904,
        img: 'https://tempodecozimento.com.br/wp-content/uploads/2017/10/batata.jpg'
      },
      {
        name: 'Desodorante',
        price: 12.52,
        code: 48905,
        img: 'https://ikesaki.vteximg.com.br/arquivos/ids/199417-1000-1000/Desodorante-Monange-Aerosol-Frutas-Vermelhas-90g-25049.09.jpg?v=636427208313400000'
      }
    ]
  }
  render() { 
    return (
      <section>
        <h1>Shopping</h1>
        { this.state.items.map(item => <Product name={ item.name } price={ item.price } image={ item.img } key={ item.code } />) }
        
      </section>
    );
  }
}
 
export default ShoppingList;