import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { deleteProject } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Projects = ({ proj }) => {
  const projects = proj.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
      </td>
      <td>
        <button className='btn btn-danger'>Delete</button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='my-2'>Project Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th>Industry</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{projects}</tbody>
      </table>
    </Fragment>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  //deleteExperience: PropTypes.func.isRequired
};

export default Projects;
