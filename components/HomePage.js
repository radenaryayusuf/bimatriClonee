import React, { Component } from 'react';
import { Image,TextInput, ScrollView,RefreshControl, View} from 'react-native';
import {Container ,Footer,Item,Input, FooterTab,Header ,Content ,Label ,Drawer ,Button ,CardItem, ListItem ,List ,Left ,Right ,Body ,Badge,Card ,Text, Icon, StyleProvider } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SideBar from '../SideBar';
import getTheme from '../native-base-theme/components';
import custom from '../native-base-theme/variables/platform';
import SlideShow from './SliderTri';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import Category  from './Category'
import RecommendationsCardItem from './RecommendedFilm'

 export default class HomePage extends React.Component {
  
  constructor(props) {
    super(props);
    this.state =
     {status: false, refreshing: false, searchText: ''}
  this.inputSearchHome = React.createRef()
  }
  
  
  _onRefresh = () => {
    this.setState({refreshing: true});
    fetchData().then(() => {
      this.setState({refreshing: false});
    });
  }
  
  // shouldComponentUpdate(nextProps, nextState){
  //   if (this.state.status == true){
  //    alert('asd')
  //     return true
  //   }else{
  //     null
  //     return false;
  //   }
  // }
    closeDrawer()  {
      this.drawer._root.close()
    }
  
    openDrawer()  {
      this.drawer._root.open()
    }
   
    ShowHideTextComponentView = () =>{

      if(this.state.status == true)
      {
        this.setState({status: false})
       
      }
      else
      {
        this.setState({status: true})
       
      }
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

          <Left style={{flex:1}}>
            <Button onPress={() => this.openDrawer() } transparent>
           
              <IconM style={{marginRight:-10}} size={30} name='menu' />
              <Badge style={{width:22,height: 20}} success><Text style={{fontSize:10}}>2</Text></Badge>
            </Button>
          </Left>
        
          {
            !this.state.status ? 
            <Body style={{flex: 1}}>
            <Image
            style={{
            height: 25,
            width: 95,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
            }}
            source={require('../images/logo-bima.png')}
          >
           </Image> 
           </Body >:
             <Body style={{flex: 2}}>
           <Item  style={{borderColor:'#fff', marginEnd: 30}} >
            <IconM size={25} active name='magnify' />
            <TextInput ref={this.inputSearchHome} placeholder='Search'/>
          </Item>
          </Body>
          }
         
         
          <Right>
          {
            !this.state.status ?  <Button  onPress= {this.ShowHideTextComponentView}  transparent>
            <IconM name='magnify' size={30} />
          </Button>  : <Button style={{flex:1,size: 80, paddingLeft:0}} onPress={this.ShowHideTextComponentView} transparent>
            <Text style={{ color: '#C3C3C3',fontSize:12}}>BATALKAN</Text>
          </Button>
          
          }
            {/* <Button onPress ={() => { this.inputSearchHome.current.focus()}  } transparent>
            <Text style={{ color: '#C3C3C3',fontSize:12}}>BATALKAN</Text>
          </Button> */}
          </Right>
          
        </Header>
        <Content style={{backgroundColor: '#F6F6F6', flex: 1}}>
        
        <SlideShow />
        
        <Button style={{marginTop: -50, marginLeft: 270}} transparent><Label style={{color: '#EDEDED', textShadowColor: '#8D8D8D', textShadowOffset: {width: 2, height: 2},textShadowRadius: 10 }}>Lihat Semua</Label></Button>
        <List>
        <ListItem itemDivider>
            <Grid >
              <Col style={{marginTop: -85, marginLeft: -10}}>
            <Row style={{width: 170}}>
            
              <Label style={{fontSize: 13, fontWeight: "bold"}}>Hai,<Label style={{fontSize: 13,color: '#37B4AE'}}> 6289524131333 (DEYAN)</Label></Label>
              </Row>
              <Row style={{width: 170, marginTop: -20}}>
              <Label style={{fontSize: 13}}>Berlaku sampai 14-Sep-2023</Label>
              </Row>
              <Row style={{marginTop: -20}}>
              <Label style={{fontSize: 13 , fontWeight: 'bold'}}>Sisa Pulsa</Label><Label style={{fontSize: 13,color: '#37B4AE'}}> Rp. 900</Label>
              </Row>
              </Col>

              <Col>
              <Row style={{marginTop: -85}}>
              <Button style={{ marginTop: -7,marginLeft: 110, width: 50}} transparent>
              <Icon style={{color: '#535353'}} name='refresh' />
            </Button>  
            <Button iconLeft style={{height: 30, width: 90, backgroundColor: "#e8297a"}}>
            <Icon name='add-circle' />
            <Text>Isi Ulang</Text>
          </Button>
            </Row>
           
          </Col>
       
              </Grid>
              <Grid>
                <Row style={{marginTop: 70 ,marginLeft: -130}}>
                  <Col style={{flex: 1}} onPress={() => this.inputSearchHome.current.focus()}>
              <Image
               style={{
                height: 55,
                width: 55,
                flex: 1
              }}
               source={require('../images/Kuota.png')}
            >

            </Image>

           < Row>
              <Label style={{fontSize: 13,paddingLeft: 17,paddingRight: 5, fontWeight: "bold"}}>24.0</Label>
            </Row>
            < Row>
              <Label style={{fontSize: 13,paddingLeft: 22,paddingRight: 30}}>GB</Label>
            </Row>

            </Col>
            <Col onPress={() => {alert('PHONE')}}>
            <View>
              <Image
              
               style={{
                height: 55,
                width: 55,
                flex: 1
              }}
               source={require('../images/Phone.png')}
            >

            </Image>
            <View style={{marginLeft: 18}}>
              <Label style={{fontSize: 13,fontWeight: "bold"}}>111</Label>
            </View>
            <View style={{ marginLeft: 17}}>
              <Label style={{fontSize: 13}}>Menit</Label>
            </View>
            </View>
            </Col>
            <Col onPress={() => alert('SMS')}>
            <View>
              <Image
               style={{
                height: 55,
                width: 55,
                flex: 1
              }}
               source={require('../images/Message.png')}
            >

            </Image>

            < View style={{marginLeft: 25}}>
              <Label style={{fontSize: 13,fontWeight: "bold"}}>0</Label>
            </View>
            < View style={{marginLeft: 19}}>
              <Label style={{fontSize: 13}}>SMS</Label>
            </View>
            </View>
            </Col>
            </Row>
              </Grid>
              
            </ListItem>
        </List>
        <ScrollView
          scrollEventThrottle = {10}
        >
         <View style={{flex: 1, backgroundColor: 'white', paddingTop: 5}}>
         <Grid>
           <Col style={{width: '70%'}}>
           <Text style={{fontSize: 16, fontWeight: "bold", paddingHorizontal: 20}}>
         Rekomendasi untuk anda  
         </Text>
           </Col>
           <Col style={{width: '30%'}}>
           <Button style={{ marginTop: -12,alignSelf: "flex-end"}} transparent><Text style={{fontSize: 14,color:'#868686'}}>Lebih</Text></Button>
           </Col>
         </Grid>
         
        
           
           <ScrollView  refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh}
            color='#000'
          />
        }  horizontal={true} showsHorizontalScrollIndicator={false}>
           <Category  
            imageUri={require('../images/rec_1.jpg')}
            name="32GB + 30 Min 30 Hari"
            price = "60,000"
           />
           <Category 
            imageUri={require('../images/rec_2.jpg')}
            name="3GB (1,5GB+1,5GB Night)+Gameloft VIP 3 hari"
            price = "60,000"
           />
           <Category 
            imageUri={require('../images/rec_3.jpg')}
            name="10GB + 30 Hari Film Indonesia"
            price = "60,000"
           />
           <Category 
            imageUri={require('../images/rec_4.jpg')}
            name="Harian 5 GB 1 Hari"
            price = "60,000"
           />
          </ScrollView>
           </View>
          


        </ScrollView>
        <Card style={{borderRadius: 0, marginLeft: 0,marginRight: 0, height:320}}>
              <CardItem  header button onPress={() => alert("This is Card Header")}>
                <Grid>
                  <Row style={{height:5}}>
                    <Col>
                    <Text style={{color: '#868686', fontWeight: "bold"}}>Film Mandarin</Text>
                    </Col>
                    <Col>
                    <Button style={{ marginTop: -12,alignSelf: "flex-end"}} transparent><Text style={{fontSize: 14,color:'#868686'}}>LEBIH</Text></Button>
                    </Col>
                    </Row>
                </Grid>
                
              </CardItem>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} scrollEventThrottle = {10}>
              <RecommendationsCardItem
        imageUriFilm={require('../images/Film_1.jpg')}
        title="Bruce Lee, The Legend"
        sinopsis = "Bruce Lee, The Legend, sebuah film dokumenter yang menampilkan karir sejak masa kecilnya di Hong Kong, memainkan peran sebagai anak bermasalah di jalanan perkotaan, yang sudah menjadi petarung tangguh. Bruce kembali ke San Francisco ketika dia berusia 18 tahun dan mendaftar di sekolah menengah atas. Semangatnya untuk berlatih seni bela diri tidak pernah sirna dan dia terus mengasah keterampilannya hingga ke perguruan tinggi. Pada tahun 1964 ada perhelatan demonstrasi Kung Fu yang menandai titik balik Bruce Lee. Dia diundang ke studio untuk casting, memberinya kesempatan untuk menunjukkan tinju dan gaya tendangannya yang setiap serangan dilakukan dengan penuh energi dan kekuatan sehingga orang Amerika pun bertepuk tangan disertai kekaguman yang luar biasa. Bruce Lee, kemudian kembali ke karir filmnya. Kemudian dia mendirikan kelas Jeet Kune Do yang menarik para bintang untuk belajar dan mendapat sambutan yang baik. Dia kemudian kembali ke Hong Kong dan membuat film Big Boss untuk Golden Harvest, yang mengesankan penonton dengan gaya bela diri baru dengan gerakan yang cepat dan berdarah-darah. Bruce Lee menjadi legenda."
        ratings = {4}
        />
        <RecommendationsCardItem
        imageUriFilm={require('../images/Film_2.jpg')}
        title="Twinkle, Twinkle Lucky Stars"
        sinopsis = "Muscles (Jackie Chan), Kidstuff (Samo Hung), Fung (Yuen Biao), dan geng pergi berlibur ke Thailand dengan izin dari kepolisian Hong Kong. Juga ikut serta inspektur polisi Woo (Sibelle Hu Hui-chang) yang bertugas melacak daftar pengedar narkoba dari informan Ma (Melvin Wong Kam-sun). Sayangnya, Ma didera oleh seorang raja kriminal Thailand, tetapi dia sempat mengatakan kepada Woo, saat menjelang kematiannya, bahwa dia mengirimkan daftar itu kepada temannya di Hong Kong. Sementara itu, Muscles dan geng mengguncang Lau (James Tien Chun), pengedar narkoba, yang ternyata sedang diincar juga oleh penjahat yang sama yang membunuh Ma."
        ratings = {4}
        />
        <RecommendationsCardItem
        imageUriFilm={require('../images/Film_3.jpg')}
        title="Once Upon A Time in China and America"
        sinopsis = "Wong Fei-hung, Clubfoot, dan Bibi 13 menyeberangi Samudera Pasifik ke Amerika untuk mengunjungi Bucktooth So, yang telah membuka klinik Po-chi-lam di sana. Saat bepergian dengan kereta melalui padang gurun, mereka menjemput seorang koboi ramah bernama Billy, yang hampir mati kehausan. Ketika pesta berhenti untuk makan siang, sekelompok penduduk asli Amerika menyergap mereka. Wong, Clubfoot, dan Bibi 13 melarikan diri tetapi kereta mereka meluncur dari tebing dan jatuh ke sungai. Bibi 13 dan Clubfoot diselamatkan dan dibawa ke klinik Bucktooth So. Namun, kepala Wong terbentur di batu dan kehilangan ingatannya. Dia diselamatkan oleh suku asli Amerika. Sejak itulah petualangan mereka dimulai hingga terjadi konflik dengan para koboi dan suku Indian."
        ratings = {4}
        />
              </ScrollView>
              </Card>
    
        
        </Content>
        <Footer>
          <FooterTab  style={{backgroundColor:'#fff'}}>
            <Button>
             <Image style={{height : 32,width: 39}} source = {require('../images/icon_tab1.png')} />
            </Button>
            <Button>
            <Image style={{height : 38,width: 29}} source = {require('../images/icon_tab2.png')} />
            </Button>
            <Button>
            <Image style={{height : 32,width: 27}} source = {require('../images/icon_tab3.png')} />
            </Button>
            <Button>
            <Image style={{height : 31,width: 58}} source = {require('../images/icon_tab4.png')} />
            </Button>
            <Button>
            <Image style={{height : 30,width: 47}} source = {require('../images/icon_tab5.png')} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
       </Drawer>
    );
  }
}
