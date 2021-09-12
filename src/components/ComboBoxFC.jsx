import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    select: {
        display: 'relative',
        height: "40px",
        radius: "4px"
    },
    notchedOutline: {
        border: props => props.noborderinput ? 'none' : `1px solid ${theme.palette.grey.gray1}`
    },
    root: {
        color: props => props.labelcolor ?? theme.palette.grey.gray1,
        width: 'fit-content'
    },
    icon: {
        fill: props => props.labelcolor ?? theme.palette.grey.gray1,
    },
    menu: props => props.styleselect ?? null
}));

const ComboBoxFC = (props) => {
    const classes = useStyles(props);
    const { ...other } = props;

    return (
        <FormControl variant="outlined" {...other}>
            <Select
                style={props.styleselect}
                input={
                    <OutlinedInput
                        fullWidth={true}
                        classes={{
                            notchedOutline: classes.notchedOutline
                        }}
                    />
                }
                inputProps={{
                    id: props.inputId,
                    classes: {
                        icon: classes.icon
                    }
                }}
                labelId={props.labelId}
                className={`${classes.select} ${classes.root}`}
                onChange={props.onChange}
                value={props.value}
                MenuProps={{
                    PaperProps: {
                        elevation: 1
                    },
                    anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                    },
                    getContentAnchorEl: null
                }}
            >
                {props.nodefaultoption ? null : (
                    <MenuItem
                        key={0}
                        className={classes.menu}
                        disabled
                        value={props.defaultoption.value}>
                        {props.defaultoption.name}
                    </MenuItem>
                )}
                {props.options.map(item => (
                    <MenuItem
                        key={item.value}
                        className={classes.menu}
                        value={item.value}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl >
    );
}

ComboBoxFC.defaultProps = {
    options: [],
    defaultoption: { value: 0, name: "Seçiniz" },
    value: 0
}

export default ComboBoxFC;
