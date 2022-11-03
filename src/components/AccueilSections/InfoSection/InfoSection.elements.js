import styled from 'styled-components'

export const InfoSec = styled.div`
color : #fff;
padding: 160px 0;
background: ${({lightBg}) => (lightBg ? '#E8E9F7' : '#fff')};
`

export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: wrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media screen and (max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
}
`

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 768px){
    padding-bottom: 65px;
}
`
export const TextWrapper1 = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;


@media screen and (max-width: 768px){
    padding-bottom: 65px;
    text-align: center;
}
`



export const Heading = styled.h1`
margin-bottom: 24px;
font-weight: 700;
font-size: 48px;
line-height: 1.3;
color : ${({lightText}) => (lightText ? '#393939' : '#200752')};
`

export const Subtitle = styled.p`
max-width: 700px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color : ${({lightTextDesc}) => (lightTextDesc ? '#07E909' : '#888')};
`

export const TopTitle = styled.p`
max-width: 400px;
margin-bottom: 10px;
font-size: 15px;
line-height: 10px;
color : ${({lightTextDesc}) => (lightTextDesc ? '#07E909' : '#888')};
`

export const Desc = styled.p`
max-width: 700px;
margin-bottom: 35px;
font-size: 2rem;
font-weight: 600;
line-height: 50px;
color : #555;
`


export const ImageWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`
export const Description = styled.p`
color: #888;
font-size: 1rem;
`

export const Item =  styled.li`
color: #555;
list-style-type: none;
font-size: 1.5rem;
`