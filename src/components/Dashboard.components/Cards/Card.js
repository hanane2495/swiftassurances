import React from 'react'
import { CardContainer, ImageWrapper, CradImage, ContentWrapper, CardTitle, CardDesc, CardBtn, CardLink } from './Card.elements'

const Card = (props) => {
  return (
    <>
      <CardContainer>
        <ImageWrapper>
            <CradImage src={require(`../../../assets/undraw/${props.image}`)}/>
        </ImageWrapper>
        <ContentWrapper>
            <CardTitle>
               {props.title} {props.number}
            </CardTitle>
            <CardDesc>
              {props.desc}
            </CardDesc>
            <CardBtn>
              <CardLink to={props.path}>{props.btnText}</CardLink>
            </CardBtn>
        </ContentWrapper>
      </CardContainer>
    </>
  )
}

export default Card


/**
 * <CardLink to={props.path}>
            {props.icon}
            <CardTitle>
                {props.title}
            </CardTitle>
        </CardLink>
 */