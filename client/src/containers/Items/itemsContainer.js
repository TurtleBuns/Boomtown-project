import React, { Component } from 'react';
import Items from './items';
import Masonry from 'react-masonry-component';
import './styles.css';

class ItemsContainer extends Component {
  constructor() {
    super();

    this.state = {
      itemsData: [] //array of item objects
    };
  }
  componentDidMount() {
    let p1 = 'http://localhost:3001/items';
    let p2 = 'http://localhost:3001/users';

    const urls = [p1, p2]; //2 request to be made

    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      data => {
        const [items, users] = data;
        let dataArray = items.map(item => {
          const itemOwner = users.find(user => item.itemowner === user.id);
          item.itemowner = itemOwner;
          return item;
        });
        console.log(dataArray);
        this.setState({ itemsData: dataArray });
      }
    );
  }

  render() {
    return (
      <Masonry className="masonry">
        {this.state.itemsData.map(item => {
          return <Items key={item.id} data={item} />;
        })}
      </Masonry>
    );
  }
}
export default ItemsContainer;
