var gitCampaigns= [];
export default function(state=gitCampaigns, action){
  switch (action.type) {
    case "Get_Campaigns": { gitCampaigns = action.payload;
      console.log(action, 'action');
      return gitCampaigns;
    }
      break;
  }
  return gitCampaigns;
}
