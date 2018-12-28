
import React, { Component } from 'react';
import {Image} from 'react-native';
import {  StackActions, NavigationActions } from 'react-navigation';
import { Container, Content,  Button, Text,Form, Item, Input, Label,StyleProvider } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/platform';
import NavigationService from './navigationService';


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
              source={require('./images/bima+.jpg')}
            />
        </Row>
        <Text>{"\n"}</Text>
          <Col>
              <Item style={{borderColor:'#fff'}}>
              <Label style={{fontSize:14,color: '#37B4AE'}}>Nomor Tri Kamu</Label>
              
              
            </Item>
            <Item>
            <Input />
            
            </Item>
            </Col>
            <Text>{"\n"}</Text>
            <Row style={{alignSelf: 'flex-end'}}>
            
              <Button  onPress={() => {NavigationService.navigate('verifyLogin')}} bordered info>
            <Text>LANJUT</Text>
          </Button>
          </Row>
          <Text>{"\n"}</Text>
            <Row>
                
                
                <Text style={{fontSize:15,color: '#7C7C7C'}}>Login dibutuhkan karena kamu tidak menggunakan jarigan Tri. Masukkan
                  nomor Tri kamu dan klik tombol "Lanjut". Mohon tunggu SMS dari Tri untuk mendapatkan kode otentikasi.
                </Text>
                
              </Row>
           
          </Grid>
          </Form>
        </Content>
       
      </Container>
      </StyleProvider>
    );
  }
}