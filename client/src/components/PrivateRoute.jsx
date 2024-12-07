import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated, children }) => {
  // If the user is authenticated, render the children (protected content).
  // If not, redirect to the login page.
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
