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
import './styles.css';
import Gravatar from 'react-gravatar';
import ProfileItemList from './ProfileItemList.js';

const ProfileCard = ({ data, borrowData }) => {
  const userName = data.length > 0 ? data[0].itemowner.fullname : null;
  const userBio = data.length > 0 ? data[0].itemowner.bio : null;
  const userGrav = data.length > 0 ? data[0].itemowner.email : null;
  return (
    <div>
      <Card
        style={{
          width: '85%',
          height: '50%',
          padding: '2em',
          display: 'flex',
          justifyContent: 'right'
        }}
      >
        <div className="flex">
          <div>
            <CardTitle title={userName} subtitle={userBio} />
            <CardTitle title={data.length} subtitle={'Items Shared'} />
            <CardTitle title={borrowData} subtitle={'Items borrowed'} />
          </div>
          <div>
            <Gravatar email={userGrav} className="GravatarImg" size={170} />
          </div>
        </div>
      </Card>
      <ProfileItemList data={data} />
    </div>
  );
};

export default ProfileCard;
