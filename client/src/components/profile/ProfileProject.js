import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileProject = ({
  project: { company, title, location, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>{company}</h3>
    <p>
      <strong>Responsible for: </strong> {title}
    </p>
    <p>
      <strong>Location: </strong> {location}
    </p>
    <p>
      <strong>Timeframe: </strong> from {formatDate(from)} to{' '}
      {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProfileProject;
