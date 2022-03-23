import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import ProfileForm from './components/profile-forms/ProfileForm';
import AddProject from './components/profile-forms/AddProject';
import AddCertification from './components/profile-forms/AddCertification';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />

            <Route
              path='dashboard'
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              path='create-profile'
              element={<PrivateRoute component={ProfileForm} />}
            />
            <Route
              path='edit-profile'
              element={<PrivateRoute component={ProfileForm} />}
            />
            <Route
              path='add-project'
              element={<PrivateRoute component={AddProject} />}
            />
            <Route
              path='add-Certification'
              element={<PrivateRoute component={AddCertification} />}
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
