import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';

import { Signin, Signup, Movies } from '../../presentation';
import { useSelector } from 'react-redux';

export default function Router() {
  const isAuth = useSelector((state: any) => state.user.isAuthenticated);

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={isAuth ? <Movies/> : <Navigate to='/signin' replace />}/>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
  </BrowserRouter>
  );
}