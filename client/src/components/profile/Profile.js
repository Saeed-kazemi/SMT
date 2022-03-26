import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { Link, useParams } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileProject from './ProfileProject';
import ProfileCertification from './ProfileCertification';

const Profile = ({ getProfileById, profile: { profile }, auth }) => {
  const { id } = useParams();

  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <section className='container'>
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profiles' className='btn btn-light'>
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}

          <div className='profile-grid my-1'>
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Projects</h2>
              {profile.projects.length > 0 ? (
                <Fragment>
                  {profile.projects.map((project) => (
                    <ProfileProject key={project._id} project={project} />
                  ))}
                </Fragment>
              ) : (
                <h4>No Projects</h4>
              )}
            </div>

            <div className='profile-edu bg-white p-2'>
              <h2 className='text-primary'>Certification</h2>
              {profile.certification.length > 0 ? (
                <Fragment>
                  {profile.certification.map((certification) => (
                    <ProfileCertification
                      key={certification._id}
                      certification={certification}
                    />
                  ))}
                </Fragment>
              ) : (
                <h4>No Certification</h4>
              )}
            </div>
          </div>
        </Fragment>
      )}
    </section>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
