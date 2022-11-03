import React from 'react'
import {Container} from '../../../../GlobalStyles'
import Table from '../../../../components/Dashboard.components/Table/TableClient'

import {Liste_clients } from '../../../../components/Dashboard.components/Table/data'

const listeClient = () => {
  return (
    <>
    <div style={{padding:'1%'}}>
        <Table data={Liste_clients}/>
      </div>     
    </>
  )
}

export default listeClient