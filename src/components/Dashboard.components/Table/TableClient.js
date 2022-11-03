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
    return {color: '#fff' , fontWeight:'500', background : '#FFCD93',padding:'5px', borderRadius: '10%'}
    
  }
  else if(etat === 'En verification')
  {
    return {color: 'orange' , fontWeight:'500', background : '#59bfff', padding:'5px', borderRadius: '10%'}
    
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
           
            { title: 'Nom', field: 'nom' },
            { title: 'Prenom', field: 'prenom' },
            { title: 'Adresse', field: 'adresse'},
            { title: 'Email', field: 'email'},
            { title: 'Telephone', field: 'telephone'}
            ]}
            data={props.data}
            title="Liste des clients"
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








