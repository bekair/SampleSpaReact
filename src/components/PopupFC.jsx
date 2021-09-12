import React from 'react';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import IconButtonFC from './IconButtonFC';
import IconFC from "./IconFC";
import CloseIcon from '@iconify/icons-uil/multiply';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    button: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1)
    },
}));


const DialogTitle = ((props) => {
    const theme = useTheme();
    const classes = useStyles(props);
    const { children, onClose, ...other } = props;

    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButtonFC
                    className={classes.button}
                    height={38}
                    width={25}
                    onClick={props.onClose}
                    colorbackground={theme.palette.background.paper}
                    hoverbackgroundcolor={theme.palette.background.paper}
                    startIcon={<IconFC
                        icon={CloseIcon}
                        color={theme.palette.grey.gray1}
                        size={2}
                        width={15}
                        height={15}
                    />}
                >
                </IconButtonFC>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const PopupFC = (props) => {
    const { ...other } = props;

    return (
        <div>
            <Dialog
                maxWidth="sm"
                onClose={props.handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.open}
                {...other}>
                <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
                    {props.title}
                </DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        {props.content}
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default PopupFC;
