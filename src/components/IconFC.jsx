import { Icon } from '@iconify/react';
import { useTheme } from '@material-ui/core';

const IconFC = (props) => {
    const theme = useTheme();

    return (
        <Icon
            className={props.className}
            icon={props.icon}
            onClick={props.onClick}
            color={props.color ?? theme.palette.grey.gray1}
            width={props.width}
            height={props.height}
        />
    );
}

IconFC.defaultProps = {
    width: "",
    height: ""
}

export default IconFC;