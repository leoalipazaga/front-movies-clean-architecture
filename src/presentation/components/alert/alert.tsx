import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export enum AlertActions {
    error = 'error',
    warning = 'warning',
    success = 'success'
}

export default function XepAlert(props: any) {
    const [open, setOpen] = useState(true);

    function onCloseAlert() {
        setOpen(false);
    }

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Collapse in={open}>
                <Alert onClose={onCloseAlert} severity={props.type}>{props.message}</Alert>
            </Collapse>
        </Stack>
    );
}
