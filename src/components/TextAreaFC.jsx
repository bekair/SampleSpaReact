import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		border: `1px solid ${theme.palette.grey.A100}`,
		width: '100%',
		borderRadius: '0.5em',
		'&:hover': {
			border: `1px solid ${theme.palette.grey.dark}`
		},
		'&:focus': {
			outlineColor: theme.palette.primary.dark,
			outlineBorder: `2px solid ${theme.palette.primary.dark}`
		}
	}
}));

const TextAreaFC = (props) => {
	const classes = useStyles();

	return (
		<TextareaAutosize
			className={classes.root}
			cols={props.cols}
			rowsMin={props.rowsMin}
			placeholder={props.placeholder}
			defaultValue={props.defaultValue}
			onChange={props.onChange}
		/>
	);
}

TextAreaFC.defaultProps = {
	rowsMin: '12',
	placeholder: '',
	defaultValue: ''
}

export default TextAreaFC;
