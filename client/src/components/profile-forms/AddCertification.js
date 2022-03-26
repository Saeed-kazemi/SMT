import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCertification } from '../../actions/profile';

const AddCertification = ({ addCertification }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    award: '',
    awardedBy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const { award, awardedBy, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section className='container'>
      <h1 className='large text-primary'>Add Your Certificatation</h1>
      <p className='lead'>
        <i className='fas fa-code-branch' /> Add any Certificate or Award
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={(e) => {
          e.preventDefault();
          addCertification(formData, navigate);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Award'
            name='award'
            value={award}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Awarded by'
            name='awardedBy'
            value={awardedBy}
            onChange={onChange}
            required
          />
        </div>

        <div className='form-group'>
          <h4>Valid From Date</h4>
          <input type='date' name='from' value={from} onChange={onChange} />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value={current}
              onChange={() => setFormData({ ...formData, current: !current })}
            />{' '}
            today
          </p>
        </div>
        <div className='form-group'>
          <h4>Valid To Date</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Award Description'
            value={description}
            onChange={onChange}
          />
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </section>
  );
};

AddCertification.propTypes = {
  addCertification: PropTypes.func.isRequired,
};

export default connect(null, { addCertification })(AddCertification);
