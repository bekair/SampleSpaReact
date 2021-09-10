import { createTheme } from '@material-ui/core/styles'
import { trTR } from '@material-ui/core/locale';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3684EC',
            light: '#98C4FF',
            dark: '#267BEB'
        },
        secondary: {
            main: '#2CC5BD',
            light: '#80DCD7',
            dark: '#21B7AF'
        },
        error: {
            main: '#F05154',
            light: '#FDEFEF',
            dark: '#E32125'
        },
        success: {
            main: '#4FE366',
            light: '#E4F9E8',
            dark: '#1EA032'
        },
        background: {
            default: '#F2F3F7'
        },
        grey: {
            dark: '#292929',
            gray1: '#595959',
            gray2: '#C2C2C2',
            light: '#0355F9',
            disabled: '#F3F6F9'
        },
        menu: {
            primary: '#1F3D7C',
            secondary: '#37589D'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'PoppinsRegular',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        button: {
            textTransform: 'none'
        }
    }
}, trTR);

theme.overrides = {
    MuiSelect: {
        select: {
            '&:focus': {
                backgroundColor: theme.palette.background.paper
            }
        }
    },
    MuiFormLabel: {
        root: {
            color: theme.palette.grey.gray1,
            lineHeight: "24px"
        }
    },
    MuiListItemIcon: {
        root: {
            minWidth: '45px',
            marginLeft: '15px'
        }
    },
    MuiListItem: {
        gutters: {
            marginTop: '5px'
        },
        root: {
            "&$selected": {
                backgroundColor: theme.palette.menu.secondary,
                "&:hover": {
                    backgroundColor: theme.palette.menu.secondary
                }
            }
        }
    },
    MuiInputBase: {
        input: {
            boxSizing: 'border-box',
            borderRadius: '5px',
        }
    },
    MuiButton: {
        root: {
            backgroundColor: props => props.colorbackground ?? theme.palette.primary.main,
            color: props => props.textcolor ?? theme.palette.background.paper,
            '&:hover': {
                backgroundColor: props => props.hoverbackgroundcolor ?? theme.palette.primary.dark,
            }
        }
    }
};

export default theme;