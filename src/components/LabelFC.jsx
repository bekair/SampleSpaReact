import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: 'pointer',
        fontFamily: props => props.bold ? 'PoppinsSemiBold !important' : 'PoppinsRegular !important',
        color: props => props.labelcolor ?? theme.palette.grey.gray1,
    }
}));

const LabelFC = (props) => {
    const classes = useStyles(props);
    const { ...other } = props;
    return (
        <InputLabel id={props.id} className={classes.root} {...other}>
            {props.label}
        </InputLabel>
    );
}

LabelFC.defaultProps = {
    id: "",
    label: "",
    defaultValue: ''
}

export default LabelFC;