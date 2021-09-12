import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    main: {
        backgroundColor: props => props.colorbackground ?? theme.palette.grey.gray3,
        '&:hover': {
            background: props => props.hoverbackgroundcolor ?? theme.palette.grey.gray2,
        },
        width: props => props.width,
        height: props => props.height,
        minWidth: "28px",
        borderRadius: 4
    },
    startIconCss: {
        marginLeft: '0',
        marginRight: '0'
    },
    endIconCss: {
        marginLeft: '0',
        marginRight: '0'
    }
}));

const IconButtonFC = (props) => {
    const classes = useStyles(props);
    const { ...other } = props;

    return (
        <Button
            classes={{
                root: classes.main,
                startIcon: classes.startIconCss,
                endIcon: classes.endIconCss
            }}
            {...other}
        />
    );
};

export default IconButtonFC;