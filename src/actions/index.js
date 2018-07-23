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



export const emailChanged = (email) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: password
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_SPINNER'
    });
    fetch('http://192.168.0.100:3000/api/v1/sign_in', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            user_login: email,
            password: password
          }
        })
      }).then((response) => {
        console.log(response);
        if (response.status === 401) {
          console.log('AUTHENTICATION ERROR!!');
          dispatch({
            type: 'LOGIN_FAILED'
          });
        } else {
          console.log('SUCCESS!!');
          response.json().then(data => {
            console.log(data);
            dispatch({
              type: 'LOGIN_USER_SUCCESS',
              payload: data
            });
          });
        }
      });
  };
};
