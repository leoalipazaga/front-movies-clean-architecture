import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import { userSignin } from '../../../../features/user/data';


export function useSigninViewController() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state: any) => state.user.isAuthenticated);
    const notification = useSelector((state: any) => state.notification);
    const error = notification.length ? notification[0] : '';

    if(isAuth) {
        navigate('/', { replace: true });
    }

    const initialFormikValues = {
        email: '',
        password: ''
    };

    const validationSchema = yup.object().shape({
        email: yup.string().required('Email is required').email('Email is invalid.'),
        password: yup.string().required('Password is required.').min(6, 'Password should be of minium 6 characters length.')
    });

    const formik = useFormik({
        initialValues: initialFormikValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    function handleSubmit(e: any) {
        dispatch(userSignin(e));
    }

    function goToSignup() {
        navigate('/signup');
      }

    return {
        formik,
        goToSignup,
        error
    }
}