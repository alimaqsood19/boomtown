import React from 'react';
import ProfileCard from '../../components/Profile';

const Profile = ({ data, borrowData }) => {
  return <ProfileCard data={data} borrowData={borrowData} />;
};

export default Profile;
