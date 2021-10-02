import * as React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextBoxFC from './TextBoxFC';

const AutoCompleteFC = (props) => {
    const { ...other } = props;

    return (
        <Autocomplete
            sx={{ width: 300 }}
            options={props.options}
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={props.renderOption}
            renderInput={(params) => (
                <TextBoxFC
                    error={props.error}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-auto-complete'
                    }}
                    {...params}
                />
            )}
            {...other}
        />
    );
}

export default AutoCompleteFC;