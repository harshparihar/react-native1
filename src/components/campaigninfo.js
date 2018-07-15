import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, List, ListItem, Icon, Card, CardItem} from 'native-base';
import {connect} from 'react-redux';

import { Actions } from 'react-native-router-flux';

class CampaignInfo extends Component{
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress= {()=>Actions.pop()}>
                <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Campaign Info</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem>
              <Card>
                <CardItem cardBody>
                  <Image source={{uri: this.props.activeCampaign.image_url}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
              </Card>
            </ListItem>
            <ListItem><Text>{this.props.activeCampaign.name}</Text></ListItem>
            <ListItem><Text>{this.props.activeCampaign.target_amount}</Text></ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
function mapStateToProps(state){
  return{
    activeCampaign : state.activeCampaign
  };
}
export default connect(mapStateToProps)(CampaignInfo);
