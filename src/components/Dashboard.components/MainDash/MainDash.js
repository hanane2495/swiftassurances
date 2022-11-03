import styled from "styled-components";

export const MainDash = styled.main`
height: 100%;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(2, 1fr) 11fr;
grid-column-gap: 0px;
color: #000;
overflow-y: scroll;
`

export const NavbarArea = styled.div`
grid-area: 1 / 1 / 2 / 2;
padding: 10px 0;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 780px) {
    height: 80px;
}
`

export const SearchBarArea = styled.div`
grid-area: 2 / 1 / 3 / 2;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
padding: 0 1%;
@media screen and (max-width: 780px) {
    height: 80px;
}
`

export const ContentArea = styled.div`
grid-area: 3 / 1 / 4 / 2;
max-height:70%;
`


