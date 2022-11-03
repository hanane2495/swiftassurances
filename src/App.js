import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NavbarConnected from './components/Navbar/NavbarConnected'
import Accueil from './screens/Accueil/Accueil';
import Contact from './screens/Contact';
import SignInSignUp from './screens/SignInSignUp/SignInSignUp';
import ForgotPassword from './screens/SignInSignUp/ForgotPassword/ForgotPassword';
import GlobalStyle from './GlobalStyles';

//Dashboard components
import Sidebar from './components/Dashboard.components/Sidebar/Sidebar';
import NavbarDash from './components/Dashboard.components/NavBar.Dash/Navbar';
import SearchBar from './components/Dashboard.components/SearchBar/SearchBar' 
import {MainDash, NavbarArea, SearchBarArea, ContentArea} from './components/Dashboard.components/MainDash/MainDash';

//Dashbord pages
import TableauDeBord from './screens/Dashboard/dashbord.screens/screens/TableauDeBord';
import NouvelleDemande from './screens/Dashboard/dashbord.screens/screens/NouvelleDemande';
import EnVerification from './screens/Dashboard/dashbord.screens/screens/EnVerification';
import Acompleter from './screens/Dashboard/dashbord.screens/screens/Acompleter'
import DossierTraite from './screens/Dashboard/dashbord.screens/screens/DossierTraites'
import Refuse from './screens/Dashboard/dashbord.screens/screens/Refuse'
import ListClients from './screens/Dashboard/dashbord.screens/screens/listeClient'
import Revenus from './screens/Dashboard/dashbord.screens/screens/Revenus'
import Rapport from './screens/Dashboard/dashbord.screens/screens/Rapport'
import Profile from './screens/Dashboard/dashbord.screens/screens/Profile'

//redux
import {useSelector} from 'react-redux'

//private routes
//import PrivateRoute from './routes/PrivateRoutes'

//styles
import './App.css'

function App() {

  const isLogged = useSelector(state => state.isLogged)


  useEffect(() => {
    console.log(isLogged)
  }, [])


  return (
    <React.Fragment>
      <Router>
        {isLogged ? null : <Navbar/>}
          <GlobalStyle/>
          <Switch>
            <Route exact path ='/'  component={Accueil}/>
            <Route       path ='/contact'  component={Contact}/>
            <Route       path ='/signIn'  component={SignInSignUp}/>
            <Route       path ='/forgot-password'  component={ForgotPassword}/>
            <Route render={({location, history}) => (
              <>
              <div className="DashboardContainer">
                <div className="DashboardGlass">
                  <Sidebar/>
                  <MainDash>
                    <NavbarArea>
                      <NavbarDash/>
                    </NavbarArea>
                    <SearchBarArea>
                      <SearchBar/>
                    </SearchBarArea>
                    <ContentArea>
                      <Route  path='/tableau-de-bord'  component={props => <TableauDeBord/>}/>
                      <Route  path='/nouvelle-demande'  component={props => <NouvelleDemande/>}/>
                      <Route  path='/a-completer'  component={props => <Acompleter/>}/>
                      <Route  path='/dossier-traites'  component={props => <DossierTraite/>}/>
                      <Route  path='/refuses'  component={props => <Refuse/>}/>
                      <Route  path='/en-verification'  component={props => <EnVerification/>}/>
                      <Route  path='/liste-des-clients'  component={props => <ListClients/>}/>
                      <Route  path='/revenus'  component={props => <Revenus/>}/>
                      <Route  path='/profile'  component={props => <Profile/>}/>
                      <Route  path='/rapport'  component={props => <Rapport/>}/>
                    </ContentArea>
                  </MainDash>
                </div>
              </div>
              </>
            )}/>
          </Switch>
      </Router>   
    </React.Fragment>
  );
}

export default App;


/**          {!isLogged ? <Navbar/> : null}
 * 
 * 
 * path ='/dashboard'  component={Dashboard}
 */