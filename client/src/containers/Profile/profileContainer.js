import React, { Component } from 'react';
import Profile from './profile';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
const Id = ({ match }) => (
  <Route
    path={`${match.url}/:id`}
    render={({ match }) => (
      <h2 data-id={match.params.id} className={match.params.id}>
        Profile: {match.params.id}
      </h2>
    )}
  />
);

class ProfileContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return <div>{<Profile />}</div>;
  }
}
export default withRouter(ProfileContainer);
// a user id k721A4pRNggCx7b6ryEE8vx1VIi1
