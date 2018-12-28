import React, { Component } from 'react';
import {Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, H1,Title, Content, Footer,Form,Item,Input,Label, FooterTab, Button,ListItem,List, Left, Right, Body,  Text,Separator,Icon,Picker, StyleProvider } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/platform';

export default class TriCare extends Component {
    service = [
        'Pengaduan',
         'Pertanyaan'
         
     ]
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2(value) {
        this.setState({
          selected2: value
        });
      }
    

    
    
   
  render() {
  
    
    return (
        <StyleProvider style={getTheme(custom)}>
      <Container>
        <Header>
          
          <Body>
          
          <Image
 style={{
   height: 25,
   width: 95,
   paddingTop: 0,
   alignSelf: 'center'
 }}
  source={require('./images/logo-bima.png')}
>
</Image>
          </Body>
         
        </Header>
        <Content  style={{backgroundColor: '#F6F6F6'}}>
        <List>
            <ListItem itemDivider>
            <Image
            style={{ height: 26, width: 25 }}
  source={require('./images/bantuan.png')}
/><Text style={{fontWeight:'bold'}}>  Bantuan</Text>
            </ListItem>  
            </List>  
            <Content padder>                
            <H1 style={{fontWeight: 'bold'}}>3Care</H1> 
            <Text>Selamat datang di 3Care, silahkan masuk</Text>
            <Form>
                <Grid>
            
            <Col style={{ paddingTop: 25}}>
            <Label style={{color: '#868686', fontSize: 14}}>Nomor Tri</Label>
            </Col>
            <Col style={{ paddingTop: 15, width: 220, paddingLeft: 0}}>
            <Item regular>
              
            <Input style={{paddingRight: 2}}/>
          </Item>
            </Col>
            </Grid>

            <Grid>
            <Col style={{ paddingTop: 25}}>
            <Label style={{color: '#868686' , fontSize: 14}}>Nama</Label>
            </Col>
            <Col style={{ paddingTop: 15, width: 220, paddingLeft: 0}}>
            <Item regular>  
            <Input style={{paddingRight: 2}}/>
          </Item>
            </Col>
            </Grid>
            <Grid>
            <Col style={{ paddingTop: 30}}>
                <Label style={{color: '#868686', fontSize: 14}}>Tipe Layanan</Label>
                </Col>
                <Col style={{ paddingTop: 10, width: 220, paddingLeft: 0}}>
                <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined, color: '#868686', transform: [{ scaleX: 1.0 }, { scaleY: .8 }] }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
                
              >
             
                {this.service.map((type, i) => {
            return <Picker.Item  textStyle={{fontSize: 8}} label={type} key={`${i}+1`} value={i} />
           })}
              </Picker>
            </Item>
                </Col>
            
            </Grid>
            <Grid>
            <Row style={{alignSelf: 'flex-end', paddingTop: 25}}>
            <Button onPress= {() => {Actions.pop(); }} info><Text> Kirim </Text></Button>
            </Row>
            </Grid>

          </Form>
            </Content>
            
            
            
            
          
         
        </Content>
      
      </Container>
      </StyleProvider>
    );
  }
}