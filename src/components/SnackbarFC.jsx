import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { closeSnackbar, snackbarStates } from '../redux/slices/snackbar';
import { Slide } from '@material-ui/core';

const SnackbarFC = () => {
    const dispatch = useDispatch();
    const {
        snackbarMessage,
        snackbarOpen,
        snackbarMessageType
    } = useSelector(snackbarStates);

    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }

        dispatch(closeSnackbar());
    }

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            TransitionComponent={Slide}
            open={snackbarOpen}
            autoHideDuration={5000}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={snackbarMessageType}>
                {snackbarMessage}
            </Alert>
        </Snackbar>
    );
}
export default SnackbarFC;
