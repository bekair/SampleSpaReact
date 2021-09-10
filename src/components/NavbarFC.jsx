import NavbarMenuListFC from "./NavbarMenuListFC";
import { makeStyles, AppBar, Toolbar, useTheme } from "@material-ui/core";
import userIcon from '@iconify/icons-uil/user-circle';
import logo from '../assets/images/react-icon.png';
import IconFC from './IconFC';
import LabelFC from "./LabelFC";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState, React } from "react";
import { useHistory } from "react-router-dom";
import { clearAccountInfo } from '../utils/appUtils'
import ButtonFC from "./ButtonFC";
import { LanguageFormatter, messageFormatter } from "../locales/LanguageHelpers";
import { useIntl } from "react-intl";

const useStyles = makeStyles(theme => ({
    logoDiv: {
        display: 'flex',
        maxHeight: theme.spacing(8),
        flexGrow: 1
    },
    logoImg: {
        objectFit: 'cover'
    },
    appBar: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: 'none'
    }
}));

const NavbarFC = (props) => {
    const classes = useStyles(props);
    const theme = useTheme();
    const menuItems = NavbarMenuListFC;
    const intl = useIntl();
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();

    const handleLogoutClick = () => {
        clearAccountInfo();
        setToken(undefined);
    };

    const handleLoginClick = (event) => {
        //Open Login Modal
    };

    const handleHomepageClick = (event) => {
        //history.push homepage
    };

    const handleClose = () => {
        clearAccountInfo();
        history.push("/login");
    };

    const menuClose = () => {
        setAnchorEl(null);
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <div className={classes.logoDiv}>
                    <ButtonFC
                        style={{ objectFit: 'cover' }}
                        colorbackground={theme.palette.background.paper}
                        hoverbackgroundcolor={theme.palette.background.paper}
                        textcolor={theme.palette.secondary.main}
                        onClick={handleHomepageClick}
                        startIcon={
                            <img
                                className={classes.logoImg}
                                src={logo}
                                alt='bcb logo'
                                height='60'
                            />
                        }>
                        <LabelFC
                            onClick={handleHomepageClick}
                            color={theme.palette.primary.main}
                            bold={true}
                            id="logo-label"
                            style={{ fontSize: '30px', cursor: 'pointer' }}
                            label={intl.formatMessage({
                                ...messageFormatter("logo.label"),
                            })}
                        />
                    </ButtonFC>
                </div>
                <div>
                    {token ? (
                        <>
                            <ButtonFC
                                colorbackground={theme.palette.background.paper}
                                hoverbackgroundcolor={theme.palette.background.paper}
                                textcolor={theme.palette.secondary.main}
                                endIcon={<IconFC
                                    icon={userIcon}
                                    width={20} height={20}
                                    color={theme.palette.primary.main}
                                />}>
                                <LabelFC id="ad-soyad-label" label={localStorage.getItem('adSoyad')} style={{ fontSize: '12px' }} />
                            </ButtonFC>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={menuClose}
                                getContentAnchorEl={null}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <MenuItem onClick={handleLogoutClick}><LanguageFormatter id="logout.button" /></MenuItem>
                            </Menu>
                        </>
                    ) :
                        <ButtonFC
                            colorbackground={theme.palette.primary.main}
                            hoverbackgroundcolor={theme.palette.primary.dark}
                            textcolor={theme.palette.secondary.main}
                            onClick={handleLoginClick}
                        >
                            <LabelFC
                                id="login-label"
                                style={{ fontSize: '12px' }}
                                label={intl.formatMessage({
                                    ...messageFormatter("login.button"),
                                })}
                            />
                        </ButtonFC>
                    }
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default NavbarFC;