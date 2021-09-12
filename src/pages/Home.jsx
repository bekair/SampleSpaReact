import { Grid, makeStyles, Typography } from "@material-ui/core";
import { LanguageFormatter } from "../locales/LanguageHelpers";

const useStyles = makeStyles((theme) => ({
    gridItem: {
        margin: '5px'
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item spacing={5} className={classes.gridItem}>
                <Typography variant="h5">
                    <LanguageFormatter id="pages.home" />
                </Typography>
            </Grid>
            <Grid item spacing={2} className={classes.gridItem}>
                <LanguageFormatter id="pages.home.dummy.text" />
            </Grid>
        </Grid >
    );
}

export default Home;