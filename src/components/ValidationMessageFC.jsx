import { makeStyles, useTheme } from "@material-ui/core";
import LabelFC from "./LabelFC";

const useStyles = makeStyles((theme) => ({
    invalid: {
        color: theme.palette.error.dark,
        fontFamily: 'PoppinsRegular',
        fontSize: 11,
        textAlign: 'left',
    }
}));

const ValidationMessageFC = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        props.touched && props.error ? (
            <LabelFC
                className={classes.invalid}
                id={props.id}
                colorlabel={theme.palette.error.main}
                label={props.error ?? null} />
        ) : null
    );
}

export default ValidationMessageFC;