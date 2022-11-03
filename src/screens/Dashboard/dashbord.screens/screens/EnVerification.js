import React from 'react'
import Table from '../../../../components/Dashboard.components/Table/Table'

import {Liste_demande_verification} from '../../../../components/Dashboard.components/Table/data'


const EnVerification = () => {
  return (
    <>
      <div style={{padding:'1%'}}>
        <Table data={Liste_demande_verification}/>
      </div>     
    </>
  )
}

export default EnVerification