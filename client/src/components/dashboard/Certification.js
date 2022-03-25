import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCertification } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Certification = ({ certification, deleteCertification }) => {
  const certifications = certification.map((certi) => (
    <tr key={certi._id}>
      <td>{certi.award}</td>
      <td className='hide-sm'>{certi.awardedBy}</td>
      <td>
        {formatDate(certi.from)} - {certi.to ? formatDate(certi.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteCertification(certi._id)}
          className='btn btn-danger'
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Certification / Awards</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Award</th>
            <th className='hide-sm'>Awarded By</th>
            <th className='hide-sm'>Valid </th>
            <th />
          </tr>
        </thead>
        <tbody>{certifications}</tbody>
      </table>
    </Fragment>
  );
};

Certification.propTypes = {
  certification: PropTypes.array.isRequired,
  deleteCertification: PropTypes.func.isRequired,
};

export default connect(null, { deleteCertification })(Certification);
