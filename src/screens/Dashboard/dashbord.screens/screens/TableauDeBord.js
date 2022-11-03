import React from 'react'
import {DashContentContaier, CardsContainer, TableContainer, CardWrapper} from '../styles/TableauDeBord.elements'
import Card from '../../../../components/Dashboard.components/Cards/Card'
import Table from '../../../../components/Dashboard.components/Table/Table'

//cards data
import {CardsData} from '../../../../components/Dashboard.components/Cards/Cards.data'

//table data
import {Liste_demande} from '../../../../components/Dashboard.components/Table/data'

const TableauDeBord = () => {

  //material-table stuff

  return (
    <>
     <DashContentContaier>
        <CardsContainer>
            {CardsData.map((card, id) => {
              return (
                <CardWrapper style={{background:'#fff'}} key={id}>
                  <Card
                    image = {card.image}
                    title={card.heading}
                    desc={card.desc}
                    path={card.path}
                    btnText={card.btnText}
                    number={card.number}
                  />
                </CardWrapper>
              );
            })}
        </CardsContainer>
        <TableContainer>
            <h3>Liste des Demandes</h3>
            <Table data={Liste_demande}/>
            
       </TableContainer>
     </DashContentContaier>
    </>
  )
}

export default TableauDeBord