import { Routes, BrowserRouter, Route } from 'react-router-dom';

import { PrivateRoute } from '../../main/proxies';
import { Signin, Signup, Movies } from '../../presentation';

export default function Router() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      {PrivateRoute({ path: '/', element: <Movies/> })}
    </Routes>
  </BrowserRouter>
  );
}