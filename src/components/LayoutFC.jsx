import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import NavbarFC from './NavbarFC';
import Routes from '../routes';
import { Link } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { messageFormatter } from '../locales/LanguageHelpers';

const Copyright = () => {
	const copyrightLink = 'https://github.com/bekair';
	const intl = useIntl();

	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{`${intl.formatMessage({
				...messageFormatter("copyright.label"),
			})} © `}
			{
				<Link href={copyrightLink}>Bekir Can Baykal</Link>
			}
			{' ' + new Date().getFullYear()}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundColor: theme.palette.background.default
	},
	menuButton: {
		color: theme.palette.background.paper
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		height: '100%',
		maxWidth: '100%'
	},
	paper: {
		padding: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		minHeight: window.innerHeight,
	}
}));

const Layout = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<NavbarFC />
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper className={classes.paper}>
								<Routes />
							</Paper>
							<Box pt={2}>
								<Copyright />
							</Box>
						</Grid>
					</Grid>
				</Container>
			</main>
		</div>
	);
}

export default Layout;
