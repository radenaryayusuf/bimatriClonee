import React, { Component } from 'react';
import { createAppContainer, createStackNavigator ,DrawerNavigator} from 'react-navigation';
import Login from './Login';
import PageMain from './PageMain';
import MessageTri from './MessageTri';
import TriCare from './TriCare';
import verifyLogin from './components/verifyLogin';
import NavigationService from './navigationService';
import HomePages from './components/HomePage';
import notificationsPage from './components/notificationsPage'

const RootStack = createStackNavigator(
  {
    Login: Login,
    HomePage: HomePages,
    PageMain : PageMain,
    Messagetri : MessageTri,
    Tricare : TriCare,
    verifyLogin : verifyLogin,
    notificationsPage : notificationsPage,
    
  },
  {
    initialRouteName: 'Login',
    headerMode: "none"
  }
  
);
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  
  
  render() {
    return(
< AppContainer
ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef);}}
/>
    )
    
 

  }
}
