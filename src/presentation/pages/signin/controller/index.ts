import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as yup from 'yup';

import { signinFlow } from '../store';


export function useSigninViewController() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        const signin = signinFlow(e, {
            onSucess: () => {
                navigate('/', { replace: true });
            }
        });
        dispatch(signin);
    }

    function goToSignup() {
        navigate('/signup');
      }

    return {
        formik,
        goToSignup
    }
}