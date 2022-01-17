import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { USER_FEATURE } from '../../../features/user/data';
import { clearNotification } from '../../../main/store/notification';

export enum AlertActions {
    error = 'error',
    warning = 'warning',
    success = 'success'
}

export default function XepAlert(props: any) {
    const [open, setOpen] = useState(true);
    const dispatch = useDispatch();

    function onCloseAlert() {
        setOpen(false);
        dispatch(clearNotification({ feature: USER_FEATURE }));
    }

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Collapse in={open}>
                <Alert onClose={onCloseAlert} severity={props.type}>{props.message}</Alert>
            </Collapse>
        </Stack>
    );
}
