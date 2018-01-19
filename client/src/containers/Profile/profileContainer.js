import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import Profile from './profile';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import Gravatar from 'react-gravatar';
import moment from 'moment';

class ProfileContainer extends Component {
  constructor() {
    super();

    this.state = {
      itemsData: [], //array of item objects
      usersData: {}
    };
  }
  componentDidMount() {
    let p1 = 'http://localhost:3001/items';
    let p2 = 'http://localhost:3001/users';

    const urls = [p1, p2]; //2 request to be made
    // Promise.all(p2.map(p2 => fetch(p2).then(resp => resp.json()))).then(
    //   data =>{

    //   }
    // )
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      data => {
        const [items, users] = data;
        let dataArray = items.map(item => {
          const itemOwner = users.find(user => item.itemowner === user.id);
          const borrowOwner = users.find(user => item.borrower === user.id);
          item.itemowner = itemOwner;
          item.borrower = borrowOwner;
          return item;
        });
        console.log(dataArray);
        let userArray = dataArray.filter(
          dataArray => dataArray.itemowner.id === this.props.match.params.id
        );
        this.setState({ itemsData: userArray });
        // console.log(users);
        let userData = users.find(
          users => users.id === this.props.match.params.id
        );
        this.setState({ usersData: userData });
        console.log(this.state.usersData);
      }
    );
  }

  render() {
    console.log('here i am', this.state.usersData);
    return (
      <div className="profile-container">
        <Card className="playerCard-container">
          <div className="playerCard">
            <CardTitle
              className="userName"
              title={this.state.usersData.fullname}
              subtitle={this.state.usersData.bio}
            />
            <div className="profileMeta">
              <div className="sharedStats">
                <CardHeader
                  title={this.state.itemsData.length}
                  subtitle="Items shared"
                />
                <CardHeader title="0" subtitle="Items Borrowed" />
              </div>
              <Gravatar
                className="circleeman"
                email={this.state.usersData.email}
              />
            </div>
          </div>
        </Card>
        <div className="masonry">
          <Masonry>
            {this.state.itemsData.map(item => {
              return <Profile key={item.id} data={item} />;
            })}
          </Masonry>
        </div>
      </div>
    );
  }
}

export default withRouter(ProfileContainer);
// example user id k721A4pRNggCx7b6ryEE8vx1VIi1
