let  pointsForPlayer1 =  0 ;


const reducScoreForPlayer1 = (state=pointsForPlayer1,action)=>{
    switch(action.type){

        case "LOVE":  return  state+0;
        case "FIFTEEN":  return  state+1;
        case "THIRTY":  return  state+2;
        case "FOURTY":  return state +3;
        case "ZERO" : return state =0;

        default:  return state;

    }
}

export default reducScoreForPlayer1