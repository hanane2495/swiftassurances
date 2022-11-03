import styled from 'styled-components'

export const DashContentContaier = styled.div`
height: 100%;
width: 100%;
padding: 1%;
margin-top: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

//card section
export const CardsContainer = styled.div`
width: 100%;
margin-bottom: 0.5%;
display: grid;
grid-template-columns: 1fr 1fr 1fr  ;
grid-gap: 20px;

@media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr ;
    padding: 0;
}

@media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const CardWrapper = styled.div`
padding:10px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
height:190px ;
border-radius: 10px;

box-shadow: 15px 8px 53px -13px rgba(0,0,0,0.3);
-webkit-box-shadow: 15px 8px 53px -13px rgba(0,0,0,0.3);
-moz-box-shadow: 15px 8px 53px -13px rgba(0,0,0,0.3);
transition: all 0.5s ease-in-out;


&:hover{
    transform: scale(1.05);
}

@media screen and (max-width: 1200px) {
    height:180px ;
}

@media screen and (max-width: 780px) {
    height:180px ;
}
`

export const TableContainer = styled.div`
width: 100%;
padding: 20px 0;
@media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr ;
    padding: 0;
}

@media screen and (max-width: 780px) {
    grid-template-columns: 1fr;
    padding: 10px 20px;
}
`
