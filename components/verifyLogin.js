
import React, { Component } from 'react';
import {Image, StyleSheet, View} from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Form, Item, Input, Label,Card, CardItem, StyleProvider } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from '../native-base-theme/components';
import custom from '../native-base-theme/variables/platform';



export default class Login extends React.Component {
  
  render() {
    return (

    <StyleProvider style={getTheme(custom)}>
      <Container>
        
        <Content padder>
        <Form>
       <Grid>
       <Row style={{alignSelf: 'center', paddingTop: 35}}>
              
              <Image style={{ height: 170, width: 200}}
  source={require('../images/bima+.jpg')}
>
</Image>
          </Row>
          <Text>{"\n"}</Text>
         <Col>
         <Item style={{borderColor:'#fff'}}>
              <Label style={{color: '#37B4AE'}}>Nomor Tri Kamu</Label>
              
            </Item>
            <Item>
            <Input />
            </Item>
            </Col>
            <Col>
            <Item style={{borderColor:'#fff'}}>
              <Label style={{color: '#37B4AE'}}>Kode Otentikasi</Label>
              
            </Item>
            <Item>
            <Input />
            </Item>
            <Text>{"\n"}</Text>
            </Col>
            <Row>
                <Button transparent>
                
                  <Text style={{color: '#7C7C7C'}}>Kirim Kode Otentikasi</Text>
                </Button>
              </Row>
            <Row style={{alignSelf: 'flex-end'}}>
              <Button onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'HomePage' })
              ],
            }))
          }} bordered info>
            <Text>LANJUT</Text>
          </Button>
          </Row>
          </Grid>
          </Form>
        </Content>
       
      </Container>
      </StyleProvider>
    );
  }
}