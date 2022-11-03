import React from 'react'
import {Container} from '../../../../GlobalStyles'
import Table from '../../../../components/Dashboard.components/Table/Table'

//table data
import {Dossiers_traites} from '../../../../components/Dashboard.components/Table/data'

const DossierTraites = () => {
  return (
    <>
    <div style={{padding:'1%'}}>
      <Table data={Dossiers_traites}/>
    </div>     
  </>
  )
}

export default DossierTraites