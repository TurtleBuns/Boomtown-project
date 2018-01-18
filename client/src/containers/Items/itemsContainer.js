import React, { Component } from 'react';
import Items from './items';
import Masonry from 'react-masonry-component';
import './styles.css';
import { connect } from 'react-redux';
import { fetchItemsAndUsers } from '../../redux/modules/items';

class ItemsContainer extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.dispatch(fetchItemsAndUsers());
  }
  render() {
    console.log(this.props.itemsData);
    return (
      <Masonry className="masonry">
        {this.props.itemsData.map(item => {
          return <Items key={item.id} data={item} />;
        })}
      </Masonry>
    );
  }
}
const mapStateToProps = state => ({
  itemsData: state.items.itemsData,
  isLoading: state.items.isLoading
});
export default connect(mapStateToProps)(ItemsContainer);
