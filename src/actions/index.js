export function getCampaigns(response) {
  return{
    type: 'Get_Campaigns',
    payload: response
  }
}

export function getCampaignThunk() {
  return function(dispatch, getState) {
    fetch('http://raisefunds.online/campaigns.json')
    .then(e => e.json())
      .then(function(response){
        dispatch(getCampaigns(response.campaigns))
      }).catch((error) => {
           console.error(error,"ERRRRRORRR");
       });
  }
}

export function campaignSelected(campaign){
  return{
    type: 'Campaign_Selected',
    payload: campaign
  }
}
