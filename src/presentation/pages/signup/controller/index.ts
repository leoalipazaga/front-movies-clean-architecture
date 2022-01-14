import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import * as yup from 'yup';

import { addAccount } from '../../../../domain/usecases';

export function useSignupViewController() {
    const navigate = useNavigate();

    const initialFormikValues = {
        email: '',
        password: '',
        username: ''
    };

    const validationSchema = yup.object().shape({
        username: yup.string().required('Username is required'),
        email: yup.string().required('Email is required').email('Email is invalid.'),
        password: yup.string().required('Password is required.').min(6, 'Password should be of minium 6 characters length.')
    });

    const formik = useFormik({
        initialValues: initialFormikValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit
    });

    function handleSubmit(e: any) {
        addAccount(e);
    }

    function goToSignin() {
        navigate('/signin');
    }

    return {
        formik,
        goToSignin
    }
}