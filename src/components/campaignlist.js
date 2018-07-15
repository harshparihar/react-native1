import React, { Component } from 'react';
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Spinner, List, ListItem, Icon } from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Actions } from 'react-native-router-flux';
import {getCampaigns, getCampaignThunk, campaignSelected} from '../actions/index';

class CampaignList extends Component{
  componentWillMount(){
    this.props.getCampaignThunk();
  }
  render(){
    if(this.props.campaigns.length === 0){
    return(
      <Container>
          <Header>
          <Left>
          <Button transparent onPress= {()=>Actions.pop()}>
                        <Icon name='arrow-back' />
                    </Button>
          </Left>
              <Body>
                  <Title>Campaign List</Title>
              </Body>
              <Right />
          </Header>
          <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
          <Text style= {{fontSize: 30, fontWeight: 'bold', marginTop: 30, marginBottom: 30}}>Loading your campaign List, Please wait</Text>
          <Spinner />
          </Content>
          </Container>
    );
  }
  else if(this.props.campaigns.length !== 0){
    return(
    <Container>
    <Header>
    <Left>
    <Button transparent onPress= {()=>Actions.pop()}>
                  <Icon name='arrow-back' />
              </Button>
    </Left>
        <Body>
            <Title>Camapign List</Title>
        </Body>
        <Right />
    </Header>
    <Content>
        <List dataArray={this.props.campaigns}
            renderRow={(item) =>
                <ListItem onPress={() => { Actions.CampaignInfo();
                  this.props.campaignSelected(item)}}>
                    <Text>{item.name}</Text>
                </ListItem>
                      }>
          </List>
    </Content>
    </Container>
  );
  }
  }
}

function mapStateToProps(state){
  return{
    campaigns : state.campaigns
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({getCampaigns: getCampaigns, getCampaignThunk: getCampaignThunk, campaignSelected: campaignSelected}, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(CampaignList);
