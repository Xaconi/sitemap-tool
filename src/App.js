import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Libs
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// Components
import { HeaderComponent } from './Sections/Header'
import { FooterComponent } from './Sections/Footer'
import BodyComponent from './Components/BodyComponent'

const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  padding: theme.spacing.unit * 2,
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	},
});

class App extends Component {
	
	render() {
		const { classes } = this.props;
		
		return (
			<div className={classes.root}>
				<Grid container spacing={24}>
					<Grid item xs={12}>
						<Paper className={classes.paper}>
							<HeaderComponent />
						</Paper>
						<Paper className={classes.paper}>
							<BodyComponent />
						</Paper>
						<Paper className={classes.paper}>
							<FooterComponent />
						</Paper>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(App);