import React, {useState} from 'react'
import MaterialTable from 'material-table'




const Table = (props) => {
    const [selectedRow, setSelectedRow] = useState(null);
//lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }


const makeStyle=(etat)=>{
  if(etat === 'Dossier Traité')
  {
    return {color: 'green' , fontWeight:'500', background : 'rgb(145 254 159 / 60%)',padding:'5px', borderRadius: '10%'}
    
  }
  else if(etat === 'À completer')
  {
    return {color: '#fff' , fontWeight:'500', background : '#FFAE50',padding:'5px', borderRadius: '10%'}
    
  }
  else if(etat === 'En verification')
  {
    return {color: '#3378B8' , fontWeight:'500', background : '#95CCFF', padding:'5px', borderRadius: '10%'}
    
  }
  else if(etat === 'Refuseés')
  {
    return {color: 'red' , fontWeight:'500', background : '#ffadad8f', padding:'5px', borderRadius: '10%'}
    
  }
  else{
    return {color: '#333' , fontWeight:'500', background : 'none', padding:'5px', borderRadius: '10%'}
  }
}

  return (
    <>
        <MaterialTable
            className = 'material-table-texts'
            style={{maxWidth: '100%', overflowY: 'auto', overflowX:'auto', borderRadius:'10px', width:'75vw'}}   
            columns={[
            { title: 'Demarche', field: 'demarche' },
            { title: 'Nom', field: 'nom' },
            { title: 'Prenom', field: 'prenom' },
            { title: 'Adresse', field: 'adresse'},
            { title: 'Email', field: 'email'},
            { title: 'Telephone', field: 'telephone'},
            { title: 'Plaque d immatriculation', field: 'matricule'},
            { title: 'Categorie', field: 'categorie'},
            { title: 'Permis', field: 'permis', render: rowData => <p style={rowData.permis === 'Fournis' ? {color : '#00E432'} : {color:'#E74256'}}>{rowData.permis}</p>},
            { title: 'Carte Grise', field: 'carte_grise', render: rowData => <p style={rowData.permis === 'Fournis' ? {color : '#00E432'} : {color:'#E74256'}}>{rowData.carte_grise}</p>},
            {title: 'etat', field: 'etat', render: rowData => <p style={makeStyle(rowData.etat)}>{rowData.etat}</p>}
            ]}
            data={props.data}
            title="Vos Demande D'assurances"
            onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
            options={{
            sorting:true,
            filtering: true,
            headerStyle: {
                backgroundColor: '#200752',
                color: '#fff',
                
            },
            rowStyle: rowData => ({
                backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
            })

            }}
        />

    </>
  )
}

export default Table








/*import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css";


//icons
import IconButton from '@mui/material/IconButton';
import {AiOutlineVerticalRight} from 'react-icons/ai';
import {AiOutlineLeft} from 'react-icons/ai';
import {AiOutlineRight} from 'react-icons/ai';
import {AiOutlineVerticalLeft} from 'react-icons/ai';

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <AiOutlineVerticalLeft /> : <AiOutlineVerticalRight />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <AiOutlineRight /> : <AiOutlineLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <AiOutlineLeft /> : <AiOutlineRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <AiOutlineVerticalRight /> : <AiOutlineVerticalLeft />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


//styling etat butons
const makeStyle=(status)=>{
    if(status === 'Dossier traité')
    {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
      }
    }
    else if(status === 'Refusé')
    {
      return{
        background: '#ffadad8f',
        color: 'red',
      }
    }
    else{
      return{
        background: '#59bfff',
        color: 'white',
      }
    }
  }

//custom style stuff
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#200752',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function createData(name, calories, fat, carbs, protein, etat) {
    return { name, calories, fat, carbs, protein, etat };
  }

const rows = [
  createData('Cupcake', 305, 3.7, 4.6, 209, 'En verificatio'),
  createData('Donut', 452, 25.0, 37, 4.3, 'Dossier traité' ),
  createData('Eclair', 262, 16.0, 24, 6.0, 'Refusé'),
  createData('Frozen yoghurt', 159, 6.0, 67, 4.3, 'A completer'),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 'Dossier traité'),
  createData('Honeycomb', 408, 3.2, 67, 4.3, 'A completer'),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 'Dossier traité'),
  createData('Jelly Bean', 375, 0.0, 24, 6.0, 'Refusé'),
  createData('KitKat', 518, 26.0, 49, 3.9, 'Dossier traité'),
  createData('Lollipop', 392, 0.2, 24, 6.0, 'Refusé'),
  createData('Marshmallow', 318, 0, 4.6, 209, 'En verificatio'),
  createData('Nougat', 360, 19.0, 67, 4.3, 'A completer'),
  createData('Oreo', 437, 18.0, 24, 6.0, 'Refusé'),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function CustomPaginationActionsTable() {
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
        <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029", borderRadius:'20px' }}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableHead>
                <TableRow>
                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                <StyledTableCell align="right">Calories</StyledTableCell>
                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                <StyledTableCell align="right">Statut</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
            ).map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                    <StyledTableCell align="right">
                    <span className="status" style={makeStyle(row.etat)}>{row.etat}</span>
                    </StyledTableCell>
                </StyledTableRow>
            ))}

            {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
                </TableRow>
            )}
            </TableBody>
            <TableFooter>
            <TableRow>
                <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={6}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                    'aria-label': 'rows per page',
                    },
                    native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                />
            </TableRow>
            </TableFooter>
        </Table>
        </TableContainer>
    </>
  );
}*/
