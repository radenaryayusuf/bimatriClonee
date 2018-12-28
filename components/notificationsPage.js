import React, { Component } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button,ListItem,List, Left, Right, Body,  Text,Separator,Drawer, Badge, StyleProvider } from 'native-base';

import SideBar from '../SideBar';
import { DrawerNavigator, withNavigation , } from "react-navigation";
import getTheme from '../native-base-theme/components';
import custom from '../native-base-theme/variables/platform';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Accordion from 'react-native-collapsible/Accordion';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import { Col, Row, Grid } from 'react-native-easy-grid';
   
const SECTIONS = [
    {
      date: '07 Dec 2018',
      content: require('../images/notif_1.png'),
      time : '12:39',
      contentText : 'Buat kamu yang ingin tampil beda dari yang lain, jam tangan unik dari Socia Watch cocok lengkapi gayamu.'
    },
    {
        date: '06 Dec 2018',
        content: require('../images/notif_2.jpg'),
        time : '12:45',
        contentText : 'Isi pulsa atau beli paket data, dapat banyak kejutan!'
    },
    {
        date: '05 Dec 2018',
        content: require('../images/notif_3.jpg'),
        time : '13:55',
        contentText : 'HADIAH MENANTI! Beli Voucher Games favoritmu dan dapatkan hadiah setiap harinya!'
      },
      {
        date: '04 Dec 2018',
        content: require('../images/notif_4.jpg'),
        time : '12:17',
        contentText : 'Di bima+ bisa kirim pulsa & paket data loh!'
      }
  ];
  
 class notificationsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        
         {readNotification: true, refreshing: false, activeSections: []}
      this.inputSearchHome = React.createRef()
      }
    
    
    
      _renderHeader = section => {
        return (
          <View style={{ textAlign: 'right', backgroundColor: '#F8F8F8',borderTopWidth: 1}}>
           <Grid>
           <Col style={{alignItems: "flex-end"}}>
        <Row><Text style={styles.headerText}>{section.date}</Text></Row>
        <Row><Text style={styles.headerText}>{section.time}</Text></Row>
        </Col>
        <IconM size={20} name='chevron-right' />

           </Grid>
            
          </View>
        );
      };
    
      _renderContent = section => {
        return (
          <View style={styles.content}>
           <Image style={{width:250, height: 95}} source={section.content} />
           <Text style={styles.headerText}>{section.contentText}</Text>
          </View>
        );
      };
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };
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
  source={require('../images/logo-bima.png')}
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
            <ListItem style={{borderBottomWidth:1,borderStyle:'dashed', shadowColor:'#000', shadowOpacity:20, shadowRadius:20, shadowOffset:{width:20, height:20}}} itemDivider>
            <Left style={{flex:1}}>
            <Image
            style={{ height: 28, width: 25 }}
            source={require('../images/notif.png')}
            />
            <Text style={{fontWeight:'bold'}}>  Notifikasi</Text>
            </Left>
            <Right style={{flex:1}}>
            <Button transparent>
              <Icon size={27} style={{color: '#000'}} name='refresh' />
            </Button>  
            </Right>
            </ListItem>                    
            <Accordion
        sections={SECTIONS}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
            
          </List>
        </Content>
      
      </Container>
      </StyleProvider>
      </Drawer>
    );
  }
}
export default withNavigation(notificationsPage);
const styles = StyleSheet.create({
   
    title: {
      textAlign: 'right',
      fontSize: 22,
      fontWeight: '300',
      marginBottom: 20,
    },
   
    headerText: {
      fontSize: 14,
    },
    content: {
      padding: 20,
      backgroundColor: '#F8F8F8',
    },

  });
  