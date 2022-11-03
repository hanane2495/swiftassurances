import React from 'react'
import {LightDesc, SearchBox, SearchInput, SearchButton} from './SearchBar.elements'

const SearchBar = () => {
  return (
   <>
     <LightDesc>
        Bienvenu sur votre worksapace SWIFTASSURANCES Pro
     </LightDesc>
     <SearchBox>
        <SearchInput placeholder='Recherche...'/>
        <SearchButton>
            Rechercher
        </SearchButton>
     </SearchBox>
   </>
  )
}

export default SearchBar