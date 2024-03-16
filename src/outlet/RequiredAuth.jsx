import { Navigate, Outlet } from 'react-router-dom';
import { getToLocalStorage } from '../utils/helper';

const user = getToLocalStorage('user');

export function RequireAuthentication() {
  if (user) {
    return <Outlet />;
  }

  return <Navigate to="/" replace />;
}

export function NonRequireAuthentication() {
  if (!user) {
    return <Outlet />;
  }
  return <Navigate to="/dashboard" />;
}
