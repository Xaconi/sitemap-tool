import React, { Component } from 'react'

// Components
import TableComponent from './TableComponent'

// Libs
import { xml2js, js2xml } from 'xml-js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
});

class BodyComponent extends Component {

    constructor() {
        super()
        this.state = {
            isLoaded : false,
            jsObject : '',
            xml : '',
            xmlObject : ''
        }
    }

    _generateXML = () => {
        const xml = js2xml(this.state.jsObject, { compact: true, spaces: 4})
        console.log("---GENERATE XML FILE---")
        console.log(xml)
        alert("TODO")
    }

    _loadXML = () => {
        const json = xml2js(this.state.xml, { compact: true, spaces: 4})
        this.setState({ 
            isLoaded : true,
            jsObject : json
        })
    }

    _updateInputValue = (event) => {
        this.setState({
            xml : event.target.value
        })
    }

    render() {
        const { classes } = this.props;

        return(
            <div>
                {this.state.isLoaded
                ? 
                    <div>
                        <TableComponent 
                            json={this.state.jsObject} />
                        <Button 
                            onClick={this._generateXML}
                            className={classes.button}
                            color="primary"
                            variant="contained"
                        >
                            Export XML
                        </Button>
                    </div>
                : <div>
                    <Grid item xs={12}>
                        <TextField
                            placeholder="Paste here your sitemap XML file...even if it's big as Snorlax..."
                            multiline={true}
                            rows={2}
                            rowsMax={40}
                            onChange={event => this._updateInputValue(event)}
                            variant="outlined"
                            label="Your Sitemap XML"
                            className="sitemapTextArea"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            onClick={this._loadXML}
                            className={classes.button}
                            color="primary"
                            variant="contained"
                        >
                            Load XML
                        </Button>
                    </Grid>
                </div>}      
            </div>   
        )
    }

}

export default withStyles(styles)(BodyComponent);