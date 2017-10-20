import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Gravatar from 'react-gravatar';
import moment from 'moment';
import './styles.css';

const ItemCard = ({ listValue }) => {
  let created = new Date(listValue.created);
  let lentTO = listValue.borrower
    ? `LENT TO ${listValue.borrower.fullname.toUpperCase()}`
    : '';
  return (
    <div key={listValue.id} className="singleItem">
      <Card>
        <CardMedia overlay={<CardTitle subtitle={lentTO} />}>
          <img src={listValue.imageurl} alt="" />
        </CardMedia>
        <CardHeader
          title={listValue.itemowner.fullname}
          subtitle={moment(created).fromNow()}
          avatar={
            <Gravatar
              email={listValue.itemowner.email}
              className="GravatarImg"
            />
          }
        />
        <CardTitle title={listValue.title} subtitle={`${listValue.tags} `} />
        <CardText>{listValue.description}</CardText>
        <CardActions>
          {listValue.borrower ? (
            <RaisedButton label="BORROW" disabled={true} />
          ) : (
            <RaisedButton label="BORROW" primary={true} />
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemCard;
