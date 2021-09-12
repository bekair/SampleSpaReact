import TextField from '@material-ui/core/TextField';

const TextBoxFC = (props) => {
    const { ...other } = props;
    
    return (
        <TextField
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            id="outlined-basic"
            variant="outlined"
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
