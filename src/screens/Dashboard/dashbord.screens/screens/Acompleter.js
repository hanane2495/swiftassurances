import React from 'react'
import Table from '../../../../components/Dashboard.components/Table/Table'

import {Liste_demande_a_completer} from '../../../../components/Dashboard.components/Table/data'


const Acompleter = () => {
  return (
    <>
    <div style={{padding:'1%'}}>
      <Table data={Liste_demande_a_completer}/>
    </div>     
  </>
  )
}

export default Acompleter