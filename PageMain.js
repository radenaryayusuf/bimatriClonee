import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button,ListItem,List, Left, Right, Body,  Text,Separator,Drawer,Badge, StyleProvider } from 'native-base';

import SideBar from './SideBar';
import { DrawerNavigator, withNavigation , } from "react-navigation";
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/platform';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
   
 class PageMain extends React.Component {
    closeDrawer()  {
        this.drawer._root.close()
      }
      openDrawer()  {
        this.drawer._root.open()
      }
  render() {
    return (
      <Drawer
      type="static"
      styles={{
          drawer: {
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 0
          }
        }}
            
      ref={(ref) => { this.drawer = ref; }}
      content={<SideBar navigator={this.navigator} />}
      onClose={() => this.closeDrawer()} 
      captureGestures={true}
      
      acceptPan={true}
      panOpenMask= {10}
      negotiatePan={true}     
      >
        <StyleProvider style={getTheme(custom)}>
      <Container>
      <Header>
          <Left style={{flex: 1}}>
            <Button onPress={() => this.openDrawer()} transparent>
              <Icon style={{marginRight:-10}} size={30} name='menu' />
              <Badge style={{width:22,height: 20}} success><Text style={{fontSize:10}}>2</Text></Badge>
            </Button>
          </Left>
          <Body style={{flex: 1}}>
          <Image
 style={{
   height: 25,
   width: 95,
   justifyContent: 'center',
    alignItems: 'center'
 }}
  source={require('./images/logo-bima.png')}
/>

          </Body>
          <Right style={{flex: 1}}>
            <Button onPress={() => {this.props.navigation.goBack() }} transparent>
            <Icon name='home-outline' size={30} />
            </Button>
          </Right>
        </Header>
        <Content style={{backgroundColor: '#F6F6F6'}}>
        <List>
            <ListItem itemDivider>
            <Image
            style={{ height: 26, width: 25 }}
  source={require('./images/bantuan.png')}
/><Text style={{fontWeight:'bold'}}>  Bantuan</Text>
            </ListItem>                    
            <ListItem  onPress={() => {
            this.props.navigation.navigate({ routeName: 'Tricare' })
              }}>
             <Text>3Chat Care</Text>
             
            </ListItem>
            <ListItem   onPress={() => {
            this.props.navigation.navigate({ routeName: 'Messagetri' })
              }}>
              <Text>Tinggalkan Pesan</Text>
            </ListItem>
            
          </List>
        </Content>
      
      </Container>
      </StyleProvider>
      </Drawer>
    );
  }
}
export default withNavigation(PageMain);