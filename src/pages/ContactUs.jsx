import { Box, Grid, makeStyles, Typography, useTheme } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import LabelFC from "../components/LabelFC";
import TextBoxFC from "../components/TextBoxFC";
import ValidationMessageFC from "../components/ValidationMessageFC";
import TextAreaFC from "../components/TextAreaFC";
import { useIntl } from "react-intl";
import {
    LanguageFormatter,
    messageFormatter
} from "../locales/LanguageHelpers";
import { loginStates, setName } from "../redux/slices/login";
import { useEffect, useState } from "react";
import { getCountryComboBoxOptions } from "../helpers/ProjectHelper";
import { localizationStates } from "../redux/slices/localization";
import ButtonFC from "../components/ButtonFC";
import IconFC from "../components/IconFC";
import SendIcon from '@iconify/icons-uil/fast-mail-alt';
import { Form, Formik } from "formik";
import * as Yup from "yup";
import AutoCompleteFC from "../components/AutoCompleteFC";


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
    const [countryComboBoxSelectedItem, setCountryComboBoxSelectedItem] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [comments, setComments] = useState('');
    const { name, email } = useSelector(loginStates);
    const [emailField, setEmailField] = useState(email);
    const [nameField, setNameField] = useState(name);
    const initialValuesFormik = {
        email: emailField,
        phoneNumber: phoneNumber,
        countryComboBoxSelectedItem: countryComboBoxSelectedItem
    }

    const validationSchema = Yup.object({
        email: Yup.string().email("Please enter a valid email address")
            .required("Please enter an email address")
            .typeError('Please enter a valid email address'),
        phoneNumber: Yup.number()
            .required("Please enter a phone number")
            .typeError("Please enter a valid phone number"),
        countryComboBoxSelectedItem: Yup.string()
            .nullable()
            .oneOf(getCountryComboBoxOptions(locale).map(x => x.value), "Please select a country")
    });

    const handleNameChange = (e) => {
        setNameField(e.currentTarget.value);
    }

    const handleEmailChange = (e) => {
        setEmailField(e.currentTarget.value);
    }

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.currentTarget.value);
    }

    const handleCountryComboBoxChange = (e, selected) => {
        setCountryComboBoxSelectedItem(selected ? selected.value : e.currentTarget.value);
    }

    const handleCommentsChange = (e) => {
        setComments(e.currentTarget.value);
    }

    const handleSend = () => {
        const sentJson = {
            "name": nameField,
            "email": emailField,
            "phonenumber": phoneNumber,
            "country_code": countryComboBoxSelectedItem,
            "text": comments
        }

        console.log(`Sent Object: ${JSON.stringify(sentJson)}`)
    }

    useEffect(() => {
        setCountryComboBoxOptions(getCountryComboBoxOptions(locale))
    }, [locale])

    useEffect(() => {
        setEmailField(email);
        setNameField(name);
    }, [name, email])

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValuesFormik}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, handleBlur, values, errors, touched }) => (
                <Form onSubmit={handleSend} action="javascript:void(0);">
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
                                        id='name'
                                        name='name'
                                        value={nameField}
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
                                        name="email"
                                        type='email'
                                        error={(touched.email && errors.email)
                                            ? true
                                            : false
                                        }
                                        value={values.email}
                                        onChange={handleEmailChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid item>
                                    <ValidationMessageFC
                                        id="email-validation"
                                        error={errors.email}
                                        touched={touched.email}
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
                                        id='phoneNumber'
                                        name="phoneNumber"
                                        error={(touched.phoneNumber && errors.phoneNumber)
                                            ? true
                                            : false
                                        }
                                        value={values.phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        onBlur={handleBlur}
                                    />
                                </Grid>
                                <Grid item>
                                    <ValidationMessageFC
                                        id="phone-number-validation"
                                        error={errors.phoneNumber}
                                        touched={touched.phoneNumber}
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
                                    <AutoCompleteFC
                                        id="countryComboBoxSelectedItem"
                                        name="countryComboBoxSelectedItem"
                                        renderOption={(option) => (
                                            <Box component="li" sx={{ '& > img': { marginRight: 5, flexShrink: 0 } }}>
                                                <img
                                                    loading="lazy"
                                                    width="20"
                                                    src={`https://flagcdn.com/w20/${option.value.toLowerCase()}.png`}
                                                    srcSet={`https://flagcdn.com/w40/${option.value.toLowerCase()}.png 2x`}
                                                    alt={option.name}
                                                />
                                                {option.name} ({option.value})
                                            </Box>
                                        )}
                                        onChange={handleCountryComboBoxChange}
                                        onBlur={handleBlur}
                                        // value={values.countryComboBoxSelectedItem}
                                        options={countryComboBoxOptions}
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item>
                                    <ValidationMessageFC
                                        id="country-select-validation"
                                        error={errors.countryComboBoxSelectedItem}
                                        touched={touched.countryComboBoxSelectedItem}
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
                                        id="comments"
                                        name="comments"
                                        value={comments}
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
                                        type="submit"
                                        onSubmit={handleSubmit}
                                        startIcon={<IconFC
                                            color={theme.palette.background.paper}
                                            icon={SendIcon}
                                            size={1}
                                        />}
                                        fullWidth
                                    >
                                        <LanguageFormatter id="send.button" />
                                    </ButtonFC>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}

export default ContactUs;