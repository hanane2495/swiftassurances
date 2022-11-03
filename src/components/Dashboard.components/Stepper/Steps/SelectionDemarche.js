import React, { useState } from 'react'
import {Title, Desc, CardsContainer, Card, CardIcon, CardTitle} from './styles'
import './styles.css'

const SelectionDemarche = () => {

    const [cards, setCards] = useState({
        activeObject : null,
        objects : [
            {
                id:1,
                title:'Assurance Auto',
                activeIcon : 'auto.png',
                inactiveIcon : 'auto-inactive.png'
            },
            {
                id:2,
                title:'Assurance Moto',
                activeIcon : 'moto.png',
                inactiveIcon : 'moto-inactive.png'
            },
            {   id:3,
                title:'Assurance Tempo',
                activeIcon : 'tempo-active.png',
                inactiveIcon : 'tempo-inactive.png'
            }
        ]
    })

    


    function toggleActive(index){
       // console.log({...Card, activeObject : cards.objects[index]})
        setCards({...cards, activeObject : cards.objects[index]})
    }

    function toggleActiveStyle(index){
        if(cards.objects[index] === cards.activeObject){
            return 'card active-card'
        }else{
            return 'card inactive-card'
        }
    }

  return (
    <>
    <Title>Selectionner une Demarche</Title>
    <Desc>Selectionner le type de vehicule dont vous voulez assurer</Desc>
    <CardsContainer>
        {cards.objects.map((elements, index) => (
            <div key={index} className={toggleActiveStyle(index)} onClick={() => {toggleActive(index)}}>
                
                <CardIcon src={require(`../../../../assets/icons/${elements === cards.activeObject ? elements.activeIcon : elements.inactiveIcon}`)}/> 
                <CardTitle>{elements.title}</CardTitle>
            </div>
        ))}
    </CardsContainer>
    </>
  )
}

export default SelectionDemarche


/**
 * <Card>
            <CardIcon src={require('../../../../assets/icons/auto-inactive.png')}/>
            <CardTitle>Assurance Auto</CardTitle>
        </Card>
        <Card>
            <CardIcon src={require('../../../../assets/icons/moto-inactive.png')}/>
            <CardTitle>Assurance Moto</CardTitle>
        </Card>
        <Card>
            <CardIcon src={require('../../../../assets/icons/tempo-inactive.png')}/>
            <CardTitle>Assurance Tempo</CardTitle>
        </Card>
 */