import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
    input: {
        border: props => props.outlinedBorderColor
            ? null
            : `1px solid ${props.outlinedBorderColor}`
    }
}))

const TextBoxFC = (props) => {
    const { ...other } = props;
    const classes = useStyles();

    return (
        <TextField
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            onKeyDown={props.onKeyDown}
            variant="outlined"
            InputProps={{
                classes: {
                    input: classes.input
                }
            }}
            {...other}
        />
    );
}

TextBoxFC.defaultProps = {
    placeholder: '',
    value: '',
    type: 'text'
}

export default TextBoxFC;
