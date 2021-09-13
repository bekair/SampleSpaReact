import { Grid, makeStyles, Box, useTheme } from "@material-ui/core";
import { useState } from "react";
import LabelFC from "../components/LabelFC";
import TextBoxFC from "../components/TextBoxFC";
import ButtonFC from "../components/ButtonFC";
import ComboBoxFC from "../components/ComboBoxFC";
import logo from '../assets/images/react-icon.png';
import { getLangJson, getLocale, LanguageFormatter, messageFormatter } from "../locales/LanguageHelpers";
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from "react-redux";
import { loginAction, loginStates, setEmail, setName } from "../redux/slices/login";
import { localizationStates, setLanguageComboBoxOptions, setLanguageComboBoxSelectedItem, setLocale, setLocaleFile } from "../redux/slices/localization";
import { getLanguageComboBoxOptions } from "../helpers/ProjectHelper";

const useStyles = makeStyles(() => ({
    container: {
        maxWidth: '40%',
    },
    gridContainer: {
        display: 'grid',
        minHeight: window.innerHeight * 0.3
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    gridItem: {
        justifySelf: 'center'
    }
}));

const Login = (props) => {
    const intl = useIntl();
    const theme = useTheme();
    const dispatch = useDispatch();
    const {
        name,
        email
    } = useSelector(loginStates);
    const { 
        languageComboBoxOptions, 
        languageComboBoxSelectedItem 
    } = useSelector(localizationStates);
    const [password, setPassword] = useState('');
    const classes = useStyles();

    const handleNameChange = (e) => {
        dispatch(setName(e.currentTarget.value));
    }

    const handleEmailChange = (e) => {
        dispatch(setEmail(e.currentTarget.value));
    }

    const handlePasswordChange = (e) => {
        setPassword(e.currentTarget.value);
    }

    const handleLogin = () => {
        dispatch(loginAction());

        props.onHandleLogin();
    }

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

    return (
        <Grid
            container
            justify='center'
            alignContent='center'
            className={classes.gridContainer}
        >
            <Grid
                container
                justify='center'
                alignContent='center' 
                xs={12}
                className={classes.gridItem}
            >
                <Box m={1}>
                    <Grid item>
                        <ComboBoxFC
                            id="language-select"
                            noborderinput
                            labelcolor={theme.palette.background.paper}
                            onChange={handleLanguageComboBoxChange}
                            value={languageComboBoxSelectedItem.value}
                            options={languageComboBoxOptions}
                            fullWidth
                            nodefaultoption
                        />
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
                <Box m={1}>
                    <Grid item>
                        <img
                            className={classes.textAlignCenter}
                            src={logo}
                            alt='login logo'
                            height='80'
                        />
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
                <Box m={1}>
                    <Grid item>
                        <LabelFC
                            id='name-label'
                            label={intl.formatMessage(
                                { ...messageFormatter("login.name.label") }
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <TextBoxFC
                            id='name-text'
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
                <Box m={1}>
                    <Grid item>
                        <LabelFC
                            id='email-label'
                            label={intl.formatMessage(
                                { ...messageFormatter("login.email.label") }
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <TextBoxFC
                            id='email-text'
                            value={email}
                            placeholder={intl.formatMessage(
                                { ...messageFormatter("login.email.placeholder") }
                            )}
                            onChange={handleEmailChange}
                        />
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
                <Box m={1}>
                    <Grid item>
                        <LabelFC
                            id='password'
                            label={intl.formatMessage({ ...messageFormatter("login.password.label") })}
                        />
                    </Grid>
                    <Grid item>
                        <TextBoxFC
                            id='password'
                            value={password}
                            type='password'
                            placeholder='******'
                            onChange={handlePasswordChange}
                        />
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
                <Box mx={1} my={2} className={classes.textAlignCenter}>
                    <Grid item>
                        <ButtonFC
                            onClick={handleLogin}
                            size='large'
                            style={{ fontSize: '15px' }}
                        >

                            <LanguageFormatter id="login.button" />
                        </ButtonFC>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;