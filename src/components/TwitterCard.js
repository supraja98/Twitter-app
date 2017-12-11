import React from 'react';
import { Image, View } from 'react-native';
import {  Card,CardItem,Form,Picker,Left,Right,Thumbnail,Body,  Button, Icon, Text  } from 'native-base';
import UserDetails from './UserDetails';
const Item = Picker.Item;

//showing one tweet info
const TwitterCard = () => {

    return (   
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={require('../assets/images/baby.jpg')} />
            
               <Body style ={{flexDirection: 'row'}}>
                  {/* hardcoded info being passed as props to Userdetails where it will be rendered */}
                 <UserDetails
                   titleText="React-native"
                   bodyText="It was actually very difficult to get to learn to this new technology."
                   twitterName='Supraja'
                   lastSeenTime='15m'/>
                <Icon name='arrow-dropdown'/>
          </Body>
          
             </Left>
             
             
             
           </CardItem>
           <CardItem cardBody>
 
                {/* <Image source={{uri: ''}}/> */}
                <Image source={require('../assets/images/React-native.jpg')} style={{height: 200, width: 400,alignSelf:'flex-end' }}/>
              
            </CardItem>
           <CardItem style={{justifyContent: 'flex-end'}}>

               <Button small iconLeft transparent>
                 <Icon name="text" />
                 <Text style={ styles.buttonTextStyle }>60</Text>
               </Button>

             <Button small iconLeft transparent>
                <Icon name="git-compare" />
                <Text style={ styles.buttonTextStyle } >2</Text>
              </Button>

               <Button small iconLeft transparent>
                 <Icon name="heart" />
                 <Text style={ styles.buttonTextStyle }>19</Text>
               </Button>

               <Button default small transparent>
                 <Icon name="mail" />
                 </Button>


           </CardItem>
         </Card>
       
     );
   };

     const styles = {
          buttonTextStyle: {
            paddingLeft: 5,
            color: '#000'
          }

     };

export { TwitterCard };