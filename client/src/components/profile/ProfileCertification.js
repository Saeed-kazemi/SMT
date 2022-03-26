import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileCertification = ({
  certification: { award, awardedBy, current, to, from, description },
}) => (
  <div>
    <h3 className='text-dark'>{award}</h3>
    <p>
      <strong>Awarded By: </strong> {awardedBy}
    </p>
    <p>
      <strong>Valid: </strong> from {formatDate(from)} to{' '}
      {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Description: </strong> {description}
    </p>
  </div>
);

ProfileCertification.propTypes = {
  certification: PropTypes.object.isRequired,
};

export default ProfileCertification;
