import { Box, Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import LabelFC from "../components/LabelFC";
import TextBoxFC from "../components/TextBoxFC";
import ComboBoxFC from "../components/ComboBoxFC";
import TextAreaFC from "../components/TextAreaFC";
import { useIntl } from "react-intl";
import {
    LanguageFormatter,
    messageFormatter
} from "../locales/LanguageHelpers";
import { loginStates, setEmail, setName } from "../redux/slices/login";
import { useEffect, useState } from "react";
import { getCountryComboBoxOptions } from "../helpers/ProjectHelper";
import { localizationStates } from "../redux/slices/localization";
import ButtonFC from "../components/ButtonFC";
import IconFC from "../components/IconFC";
import SendIcon from '@iconify/icons-uil/fast-mail-alt';

const useStyles = makeStyles((theme) => ({
    gridItem: {
        margin: '5px'
    },
    gridContainer: {
        display: 'grid',
        minHeight: window.innerHeight * 0.3
    }
}));

const ContactUs = () => {
    const classes = useStyles();
    const theme = useTheme();
    const dispatch = useDispatch();
    const intl = useIntl();
    const { locale } = useSelector(localizationStates);
    const [countryComboBoxOptions, setCountryComboBoxOptions] = useState();
    const [countryComboBoxSelectedItem, setCountryComboBoxSelectedItem] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [, setComments] = useState('');
    const { name, email } = useSelector(loginStates);

    const handleNameChange = (e) => {
        dispatch(setName(e.currentTarget.value));
    }

    const handleEmailChange = (e) => {
        dispatch(setEmail(e.currentTarget.value));
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.currentTarget.value);
    }

    const handleCountryComboBoxChange = (e) => {
        setCountryComboBoxSelectedItem(e.target.value);
    }

    const handleCommentsChange = (e) => {
        setComments(e.currentTarget.value);
    }

    const handleSendClick = () => {

    }

    useEffect(() => {
        setCountryComboBoxOptions(getCountryComboBoxOptions(locale))
    }, [locale])

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
                        <Typography variant="h5">
                            <LanguageFormatter id="pages.contactUs" />
                        </Typography>
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
                            onChange={handleEmailChange}
                        />
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
                <Box m={1}>
                    <Grid item>
                        <LabelFC
                            id='phone-number-label'
                            label={intl.formatMessage(
                                { ...messageFormatter("pages.contactUs.phone.label") }
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <TextBoxFC
                            id='phone-number-text'
                            type="number"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                        />
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
                <Box m={1}>
                    <Grid item>
                        <LabelFC
                            id='country-list-label'
                            label={intl.formatMessage(
                                { ...messageFormatter("pages.contactUs.country.label") }
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <ComboBoxFC
                            id="country-select"
                            onChange={handleCountryComboBoxChange}
                            value={countryComboBoxSelectedItem}
                            options={countryComboBoxOptions}
                            fullWidth
                        />
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
                <Box m={1}>
                    <Grid item>
                        <LabelFC
                            id='comments-label'
                            label={intl.formatMessage(
                                { ...messageFormatter("pages.contactUs.comments.label") }
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <TextAreaFC
                            placeholder={intl.formatMessage({
                                ...messageFormatter("pages.contactUs.comments.placeholder"
                                ),
                            })}
                            onChange={handleCommentsChange}
                            fullWidth
                        />
                    </Grid>
                </Box>
            </Grid>

            <Grid item xs={12} className={classes.gridItem}>
                <Box m={1}>
                    <Grid item>
                        <ButtonFC
                            startIcon={<IconFC
                                color={theme.palette.background.paper}
                                icon={SendIcon}
                                size={1}
                            />}
                            onClick={handleSendClick}
                            fullWidth
                        >
                            <LanguageFormatter id="send.button" />
                        </ButtonFC>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ContactUs;