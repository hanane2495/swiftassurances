import React, {useState} from 'react'
import MaterialTable from 'material-table'




const Table = (props) => {
    const [selectedRow, setSelectedRow] = useState(null);
//lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }



  return (
    <>
        <MaterialTable
            className = 'material-table-texts'
            style={{maxWidth: '100%', overflowY: 'auto', overflowX:'auto', borderRadius:'10px', width:'75vw'}}   
            columns={[
            { title: 'Date de demande', field: 'date_demande'},
            { title: 'Montant(HT)', field: 'montant'},
            { title: 'Etat', field: 'etat'},
            { title: 'Date de traitement', field: 'date_traitement'}
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








