import styled from "styled-components"
import { Link } from "react-router-dom"

export const SideBarLink = styled(Link)`
display: flex;
flex-direction: row;
text-decoration : none;
cursor : pointer;
@media screen and (max-width: 780px) {
    font-size: 0.85rem;
}
`