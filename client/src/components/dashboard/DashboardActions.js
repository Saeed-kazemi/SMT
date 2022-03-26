import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary' /> Edit Profile
      </Link>
      <Link to='/add-project' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary' /> Add Projects
      </Link>
      <Link to='/add-certification' className='btn btn-light'>
        <i className='fas fa-award text-primary' /> Add Credentials
      </Link>
    </div>
  );
};

export default DashboardActions;
