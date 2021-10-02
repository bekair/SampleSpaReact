import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { OutlinedInput } from '@material-ui/core';
import clsx from 'clsx';
import { messageFormatter } from '../locales/LanguageHelpers';
import { useIntl } from 'react-intl';

const useStyles = makeStyles((theme) => ({
    select: {
        display: 'relative',
        height: "40px",
        radius: "4px"
    },
    notchedOutline: {
        border: props => props.noborderinput
            ? 'none'
            : (props.border ?? `1px solid ${theme.palette.grey.gray1}`)
    },
    root: {
        color: props => props.labelcolor ?? theme.palette.grey.gray1,
        width: '100%'
    },
    icon: {
        fill: props => props.labelcolor ?? theme.palette.grey.gray1,
    },
    menu: props => props.styleselect ?? null
}));

const ComboBoxFC = (props) => {
    const classes = useStyles(props);
    const intl = useIntl();
    const defaultOption = {
        value: 0,
        name: intl.formatMessage({
            ...messageFormatter("default.option.combobox.name"),
        })
    };
    const { ...other } = props;

    return (
        <FormControl variant="outlined" {...other}>
            <Select
                className={clsx(classes.select, classes.root, classes.menu)}
                input={
                    <OutlinedInput
                        onBlur={props.onBlur}
                        fullWidth={true}
                        classes={{
                            notchedOutline: classes.notchedOutline,
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
                        value={props.defaultoption?.value ?? defaultOption.value}>
                        {props.defaultoption?.name ?? defaultOption.name}
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
    value: 0
}

export default ComboBoxFC;
