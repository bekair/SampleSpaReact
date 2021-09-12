import { makeStyles, AppBar, Toolbar, useTheme } from "@material-ui/core";
import userIcon from '@iconify/icons-uil/user-circle';
import logo from '../assets/images/react-icon.png';
import IconFC from './IconFC';
import LabelFC from "./LabelFC";
import PopupFC from "./PopupFC";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useState, React } from "react";
import Login from '../pages/Login';
import ButtonFC from "./ButtonFC";
import { getLangJson, getLanguageComboBoxOptions, getLocale, LanguageFormatter, messageFormatter } from "../locales/LanguageHelpers";
import { useIntl } from "react-intl";
import IconButtonFC from "./IconButtonFC";
import HomeIcon from '@iconify/icons-uil/home-alt';
import KeyIcon from '@iconify/icons-uil/key-skeleton';
import ExitIcon from '@iconify/icons-uil/exit';
import BarsIcon from '@iconify/icons-uil/bars';
import ContactUsIcon from '@iconify/icons-uil/calling';
import { useHistory } from "react-router-dom";
import { loginStates, logout } from "../redux/slices/login";
import { useDispatch, useSelector } from "react-redux";
import ComboBoxFC from "./ComboBoxFC";
import {
    localizationStates,
    setLanguageComboBoxOptions,
    setLanguageComboBoxSelectedItem,
    setLocale,
    setLocaleFile
} from "../redux/slices/localization";

const useStyles = makeStyles(theme => ({
    logoDiv: {
        display: 'flex',
        maxHeight: theme.spacing(8),
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    logoImg: {
        objectFit: 'cover'
    },
    appBar: {
        backgroundColor: theme.palette.primary.main,
        boxShadow: 'none'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
}));

const NavbarFC = (props) => {
    const classes = useStyles(props);
    const theme = useTheme();
    const intl = useIntl();
    const dispatch = useDispatch();
    const history = useHistory();
    const { token, name, email } = useSelector(loginStates);
    const { languageComboBoxOptions, languageComboBoxSelectedItem } = useSelector(localizationStates);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleLanguageComboBoxChange = (e) => {
        const selectedName = languageComboBoxOptions.filter(
            (x) => x.value === e.target.value
        )[0].name;
        const selectedValue = e.target.value;

        dispatch(setLocale(getLocale(selectedValue)));
        dispatch(setLocaleFile(getLangJson(selectedValue)));

        dispatch(setLanguageComboBoxOptions(getLanguageComboBoxOptions(selectedValue)));
        dispatch(setLanguageComboBoxSelectedItem({
            value: selectedValue,
            name: selectedName,
        }));
    }

    const handleLogout = () => {
        handleMenuClose();
        dispatch(logout());
    };

    const handleLoginClick = () => {
        handleMobileMenuClose();
        setOpenLoginModal(true);
    };

    const handleLoginModalClose = () => {
        setOpenLoginModal(false);
    }

    const handleLoggedIn = () => {
        setOpenLoginModal(false);
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setAnchorEl(null);
    }

    const handleContactUsClick = () => {
        handleMobileMenuClose();
        history.push('/contactUs');
    }

    const handleHomeClick = () => {
        handleMobileMenuClose();
        history.push('/home');
    }

    const LanguageComboBox = () => {
        return (
            <ComboBoxFC
                id="language-select"
                styleselect={{ fontSize: '12px' }}
                noborderinput
                labelcolor={theme.palette.background.paper}
                onChange={handleLanguageComboBoxChange}
                value={languageComboBoxSelectedItem.value}
                options={languageComboBoxOptions}
                fullWidth
                nodefaultoption
            />
        );
    }

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            keepMounted
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleProfileClose}
        >
            <MenuItem>
                <LabelFC
                    id="email-label-mobile"
                    labelcolor={theme.palette.grey.gray1}
                    label={email}
                    style={{ fontSize: '12px' }}
                />
            </MenuItem>
            <MenuItem onClick={handleLogout}>
                <LanguageFormatter id="logout.button" />
            </MenuItem>
        </Menu>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            keepMounted
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {token ? (
                <MenuItem>
                    <LabelFC
                        id="ad-soyad-label-mobile"
                        labelcolor={theme.palette.grey.gray1}
                        label={name}
                        style={{ fontSize: '12px' }}
                    />
                </MenuItem>
            ) : (
                <MenuItem>
                    <ButtonFC
                        textcolor={theme.palette.grey.gray1}
                        colorbackground="transparent"
                        hoverbackgroundcolor="transparent"
                        startIcon={<IconFC
                            icon={KeyIcon}
                            size={1}
                        />}
                        onClick={handleLoginClick}
                    >
                        <LanguageFormatter id="login.button" />
                    </ButtonFC>
                </MenuItem>
            )}
            <MenuItem>
                <ButtonFC
                    textcolor={theme.palette.grey.gray1}
                    colorbackground="transparent"
                    hoverbackgroundcolor="transparent"
                    startIcon={<IconFC
                        icon={HomeIcon}
                        size={1}
                    />}
                    onClick={handleHomeClick}
                >
                    <LanguageFormatter id="pages.home" />
                </ButtonFC>
            </MenuItem>
            <MenuItem>
                <ButtonFC
                    textcolor={theme.palette.grey.gray1}
                    colorbackground="transparent"
                    hoverbackgroundcolor="transparent"
                    startIcon={<IconFC
                        icon={ContactUsIcon}
                        size={1}
                    />}
                    onClick={handleContactUsClick}
                >
                    <LanguageFormatter id="pages.contactUs" />
                </ButtonFC>
            </MenuItem>
            {token ? (
                <MenuItem>
                    <ButtonFC
                        textcolor={theme.palette.grey.gray1}
                        colorbackground="transparent"
                        hoverbackgroundcolor="transparent"
                        startIcon={<IconFC
                            icon={ExitIcon}
                            size={1}
                        />}
                        onClick={handleLogout}
                    >
                        <LanguageFormatter id="logout.button" />
                    </ButtonFC>
                </MenuItem>
            ) : null}
        </Menu>
    );

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <PopupFC
                    headercontent={
                        <ComboBoxFC
                            id="language-select"
                            styleselect={{ fontSize: '12px' }}
                            noborderinput
                            onChange={handleLanguageComboBoxChange}
                            value={languageComboBoxSelectedItem.value}
                            options={languageComboBoxOptions}
                            fullWidth
                            nodefaultoption
                        />
                    }
                    title={intl.formatMessage({
                        ...messageFormatter("login.button"),
                    })}
                    open={openLoginModal}
                    onClose={handleLoginModalClose}
                    content={
                        <Login onHandleLogin={handleLoggedIn} />
                    }
                >
                </PopupFC>
                <Toolbar>
                    <div className={classes.logoDiv}>
                        <ButtonFC
                            style={{ objectFit: 'cover' }}
                            colorbackground={theme.palette.primary.main}
                            hoverbackgroundcolor={theme.palette.primary.dark}
                            onClick={handleHomeClick}
                            startIcon={
                                <img
                                    className={classes.logoImg}
                                    src={logo}
                                    alt='bcb logo'
                                    height='60'
                                />
                            }>
                            <LabelFC
                                onClick={handleHomeClick}
                                labelcolor={theme.palette.background.paper}
                                id="logo-label"
                                style={{ fontSize: '30px', cursor: 'pointer' }}
                                label={intl.formatMessage({
                                    ...messageFormatter("logo.label"),
                                })}
                            />
                        </ButtonFC>
                    </div>
                    <div className={classes.grow} />
                    <div>
                        <div className={classes.sectionDesktop}>
                            <IconButtonFC
                                colorbackground={theme.palette.primary.main}
                                hoverbackgroundcolor={theme.palette.primary.dark}
                                startIcon={<IconFC
                                    icon={HomeIcon}
                                    color={theme.palette.background.paper}
                                    size={2}
                                    width={15}
                                    height={15}
                                />}
                                onClick={handleHomeClick}
                            />
                            &nbsp;&nbsp;
                            <IconButtonFC
                                colorbackground={theme.palette.primary.main}
                                hoverbackgroundcolor={theme.palette.primary.dark}
                                startIcon={<IconFC
                                    icon={ContactUsIcon}
                                    color={theme.palette.background.paper}
                                    size={2}
                                    width={15}
                                    height={15}
                                />}
                                onClick={handleContactUsClick}
                            />
                            &nbsp;&nbsp;
                            <LanguageComboBox />
                            &nbsp;&nbsp;
                            {token ? (
                                <ButtonFC
                                    onClick={handleProfileClick}
                                    colorbackground={theme.palette.primary.main}
                                    hoverbackgroundcolor={theme.palette.primary.dark}
                                    endIcon={<IconFC
                                        icon={userIcon}
                                        width={20} height={20}
                                        color={theme.palette.primary.light}
                                    />}>
                                    <LabelFC
                                        id="ad-soyad-label"
                                        labelcolor={theme.palette.background.paper}
                                        label={name}
                                        style={{ fontSize: '12px' }}
                                    />
                                </ButtonFC>
                            ) : (
                                <ButtonFC
                                    style={{ border: `1px solid ${theme.palette.background.paper}` }}
                                    colorbackground={theme.palette.primary.main}
                                    hoverbackgroundcolor={theme.palette.primary.dark}
                                    textcolor={theme.palette.secondary.main}
                                    onClick={handleLoginClick}
                                >
                                    <LabelFC
                                        id="login-label"
                                        labelcolor={theme.palette.background.paper}
                                        style={{ fontSize: '15px' }}
                                        label={intl.formatMessage({
                                            ...messageFormatter("login.button"),
                                        })}
                                    />
                                </ButtonFC>
                            )}
                        </div>
                        <div className={classes.sectionMobile}>
                            <LanguageComboBox />
                            <IconButtonFC
                                onClick={handleMobileMenuOpen}
                                colorbackground={theme.palette.primary.main}
                                hoverbackgroundcolor={theme.palette.primary.dark}
                                startIcon={
                                    <IconFC
                                        icon={BarsIcon}
                                        width={20} height={20}
                                        color={theme.palette.primary.light}
                                    />
                                }
                            />
                        </div>
                        {renderMobileMenu}
                        {renderMenu}
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavbarFC;