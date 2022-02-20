import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  const user = true;
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: user ? <DashboardApp /> : <Navigate to="/login" /> },
        { path: 'user', element: user ? <User /> : <Navigate to="/login" /> },
        { path: 'products', element: user ? <Products /> : <Navigate to="/login" /> },
        { path: 'blog', element: user ? <Blog /> : <Navigate to="/login" /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: user ? <Navigate to="/dashboard" /> : <Login /> },
        { path: 'register', element: user ? <Navigate to="/dashboard" /> : <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
