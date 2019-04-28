import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
});

class TableComponent extends Component {
    
    render () {
        const { classes } = this.props;

        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Localization</TableCell>
                            <TableCell align="right">Last modification</TableCell>
                            <TableCell align="right">Change Frequency</TableCell>
                            <TableCell align="right">Priority</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.json.urlset.url.map(row => (
                            <TableRow key={row.loc._text}>
                                <TableCell component="th" scope="row">
                                    {row.loc._text}
                                </TableCell>
                                <TableCell align="right">{row.lastmod._text}</TableCell>
                                <TableCell align="right">{row.changefreq._text}</TableCell>
                                <TableCell align="right">{row.priority._text}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

export default withStyles(styles)(TableComponent);