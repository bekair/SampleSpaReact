import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import LabelFC from "../components/LabelFC";
import TextBoxFC from "../components/TextBoxFC";
import { useIntl } from "react-intl";
import {
    LanguageFormatter,
    messageFormatter
} from "../locales/LanguageHelpers";
import { loginStates, setEmail, setName } from "../redux/slices/login";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    gridItem: {
        margin: '5px'
    },
    gridContainer: {
        display: 'grid',
        minHeight: window.innerHeight * 0.3
    },
}));

const ContactUs = () => {
    const classes = useStyles();
    const countryList = [
        { value: "TR", name: "Turkey" },
        { value: "US", name: "United States of America" },
        { value: "GB", name: "United Kingdom" },
        { value: "DE", name: "Germany" },
        { value: "SE", name: "Sweden" },
        { value: "KE", name: "Kenya" },
        { value: "BR", name: "Brazil" },
        { value: "ZW", name: "Zimbabwe" }
    ]
    const dispatch = useDispatch();
    const [phoneNumber, setPhoneNumber] = useState(null);
    const intl = useIntl();
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
        </Grid>
    );
}

export default ContactUs;