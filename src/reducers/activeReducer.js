export default function(state= null, action){
  switch (action.type) {
    case "Campaign_Selected": return action.payload;
      break;
  }
  return state;
}
