import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {connect} from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    table: {
        minWidth: 650

    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function SimpleTable({params}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Свойства</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Наименование</TableCell>
                        <TableCell align="right">Тип</TableCell>
                        <TableCell align="right">Обязательное</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {params.map(param => (
                        <TableRow key={param.id}>
                            <TableCell component="th" scope="row">
                                {param.name}
                            </TableCell>
                            <TableCell align="right">{param.id}</TableCell>
                            <TableCell align="right">{param.name}</TableCell>
                            <TableCell align="right">{param.type}</TableCell>
                            <TableCell align="right">

                                <Checkbox
                                    checked={param.required}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const mapStateToProps = state => {
    return {params : state}
}

export default connect (mapStateToProps)(SimpleTable)