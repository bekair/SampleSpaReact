import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    main: {
        cursor: 'pointer',
        width: props => props.width,
        height: props => props.height,
        minWidth: 'max-content',
        borderRadius: 4
    },
    buttonLabel: {
        fontFamily: 'PoppinsRegular',
        fontSize: props => props.fontSize ?? theme.typography.fontSize,
        textAlign: 'center',
        alignItems: 'center',
    }
}));

const ButtonFC = (props) => {
    const classes = useStyles(props);
    const { ...other } = props;

    return (
        <Button
            classes={{ root: classes.main, label: classes.buttonLabel }}
            {...other}
        />
    );
};

export default ButtonFC;
