import { isAuth } from '../../domain/usecases';

import { RouteProps, Route, Navigate } from 'react-router-dom';

export default function PrivateRoute(props: RouteProps) {
  return isAuth()
    ? <Route {...props} />
    : <Route {...props} element={<Navigate to='/signin' replace />}/>
}