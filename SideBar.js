import React, {Component} from "react";
import { AppRegistry, Image,ImageBackground, StatusBar } from "react-native";
import { Container, Content, Text,Left,Right,Button,Icon,Body, List, ListItem } from "native-base";
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, withNavigation } from 'react-navigation';


 class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content padder style={{backgroundColor: '#ffffff'}}>
        <ImageBackground source={require('./images/vector.jpg')} style={{height: 120,
                           
              justifyContent: "center",
              alignItems: "center"}}>
    <Image
              square
              style={{ height: 35, width: 135 }}
              source={require('./images/logo-bima.png')}
            />
  </ImageBackground>
    
          
        <List>
        <ListItem onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'HomePage' })
              ],
            }))
          }} icon>
          <Left>
              
              <Image 
               style={{ height: 22, width: 22 }}
              source={require('./images/home.png')}
              />
              
            </Left>
            <Body>
              <Text>Beranda</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem onPress={() => {
            this.props.navigation.navigate({ routeName: 'PageMain' })
              }} icon>
          <Left>
              
          <Image 
          style={{ height: 22, width: 22 }}
              source={require('./images/bantuan.png')}
              />
              
            </Left>
            <Body>
              <Text>Bantuan</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem onPress={() => {
            this.props.navigation.navigate({ routeName: 'notificationsPage' })
              }} icon>
          <Left>
              
          <Image 
          style={{ height: 25, width: 22 }}
              source={require('./images/notif.png')}
              />
              
            </Left>
            <Body>
              <Text>Notifikasi</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Login' })
              ],
            }))
          }} icon>
          <Left>
                  <Image 
                  style={{ height: 26, width: 20 }}
              source={require('./images/keluar.png')}
              />
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          
          </List>
        </Content>
      </Container>
    );
  }
}
export default withNavigation(SideBar);