import React from 'react';
import './styles.css';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Gravatar from 'react-gravatar';
import Masonry from 'react-masonry-component';
import moment from 'moment';

const userCard = ({ data }) => (
  <Card>
    <CardHeader
      title={data.itemowner.fullname}
      avatar={<Gravatar className="circleeman" email={data.itemowner.email} />}
    />
  </Card>
);
const Profile = ({ data }) => (
  <div className="card">
    <Card>
      <CardMedia overlay={<CardTitle title="" subtitle="" />}>
        <img src={data.imageurl} alt="" />
      </CardMedia>
      <CardHeader
        title={data.itemowner.fullname}
        subtitle={moment(data.created)
          .startOf('day')
          .fromNow()}
        avatar={
          <Gravatar className="circleeman" email={data.itemowner.email} />
        }
      />

      <CardTitle title={data.title} subtitle={data.tags} />
      <CardText>{data.description}</CardText>
      <CardActions>
        <FlatButton label="Borrow" />
      </CardActions>
    </Card>
  </div>
);

export default Profile;
