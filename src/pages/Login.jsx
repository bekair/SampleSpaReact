import { Grid, makeStyles, Box } from "@material-ui/core";
import { useState } from "react";
import LabelFC from "../components/LabelFC";
import TextBoxFC from "../components/TextBoxFC";
import ButtonFC from "../components/ButtonFC";
import logo from '../assets/images/react-icon.png';
import { LanguageFormatter, messageFormatter } from "../locales/LanguageHelpers";
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from "react-redux";
import { loginAction, loginStates, setEmail, setName } from "../redux/slices/login";

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
    const dispatch = useDispatch();
    const {
        name,
        email
    } = useSelector(loginStates);
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

    return (
        <Grid
            container
            justify='center'
            alignContent='center'
            className={classes.gridContainer}
        >
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