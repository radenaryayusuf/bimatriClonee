import React, {Component} from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import {Button, Right} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';

class Category extends React.Component{

    render(){
        
        return(
            <View style={{height: 130, width: 170, marginLeft: 20, marginBottom: 15,marginTop: 0, borderWidth: 0.5, borderColor: '#dddddd', shadowColor:'#000', shadowOffset: {width: 1, height: 1}, shadowRadius: 10,shadowOpacity: 1.0 }}>
            <View style={{flex: 2}} >
               <Image 
               source={this.props.imageUri}
               style={{
                 flex:1, width: null, height: null, resizeMode: 'cover'
               }}
               />
            </View>
            <View style={{ flex: 1, paddingLeft: 10, paddingTop:5}}>
               <Text style={{color:'#868686', fontWeight: "bold"}}>{ this.props.name.length >= 23 ? this.props.name.substring(0,23)+'...' : this.props.name=this.props.name}</Text>
           <Grid>
           <Col />
               <Col>
               <Button style={{width:40,height: 20 ,alignSelf: "flex-end",marginRight:5,  justifyContent: "center"}} bordered info>
            <Text style={{ fontSize: 12,color: '#37B4AE'}}>{this.props.price}</Text>
          </Button>
               </Col>
               
           </Grid>
               
            </View>
            </View>
        )
    }
}
export default Category;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})