import React, {Component} from 'react'
import{
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {Card,Content,Body,Button, CardItem, Right} from 'native-base'
import StarRating from 'react-native-star-rating'
class RecommendedFilm extends React.Component{
    render(){
        return(
            
          <Card style={{borderRadius: 0,width:345, height:270, marginRight:6, marginLeft:6, marginStart:0}} >
              
          <CardItem>
            
              <View>
                <Grid>
                  <Col style={{marginBottom:15}}>
                    
                  <Text style={{fontWeight : "bold",color: '#868686'}}>{this.props.title}</Text>
                    <Row>
                   
                    <StarRating 
                      disabled= {true}
                      maxStars= {5}
                      rating= {this.props.ratings}
                      starSize= {20}
                      fullStarColor= '#D10004'
                      emptyStarColor='#868686'
                    />
                    </Row>
                  </Col>
                  <Col>
                  <Button style={{width:50,height: 20 ,alignSelf: "flex-end",  justifyContent: "center", borderRadius: 0}} bordered info>
        <Text style={{ fontSize: 12,color: '#37B4AE'}}>Nonton</Text>
      </Button>
                  </Col>
                </Grid>
                <View style={{alignSelf:"center",marginTop:55}}>
                <Image
                style={{width: 310, height: 148}}
                source={this.props.imageUriFilm}
                
                />
                <Text style={{color:'#868686', textAlign: "left"}}>{this.props.sinopsis.length >= 50 ? this.props.sinopsis.substring(0,143)+' ...' : this.props.sinopsis=this.props.sinopsis}</Text>
                </View>
              </View>
          </CardItem>
          
         
          </Card>
        )
    }
}
export default RecommendedFilm;