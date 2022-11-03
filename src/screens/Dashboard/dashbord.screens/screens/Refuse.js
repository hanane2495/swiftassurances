import React from 'react'
import Table from '../../../../components/Dashboard.components/Table/Table'


//table data
import {Liste_demande_refusees} from '../../../../components/Dashboard.components/Table/data'

const Refuse = () => {
  return (
    <>
      <div style={{padding:'1%'}}>
        <Table data={Liste_demande_refusees}/>
      </div>     
    </>
  )
}

export default Refuse