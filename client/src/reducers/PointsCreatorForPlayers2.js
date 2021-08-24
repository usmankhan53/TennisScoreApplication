let  pointsForPlayer2 =  0 ;


const reducScoreForPlayer2 = (state=pointsForPlayer2,action)=>{
    switch(action.type){

        case "LOVE2":  return  state+0;
        case "FIFTEEN2":  return  state+1;
        case "THIRTY2":  return  state+2;
        case "FOURTY2":  return state +3;
        case "ZERO" : return state =0;

        default:  return state;

    }
}

export default reducScoreForPlayer2