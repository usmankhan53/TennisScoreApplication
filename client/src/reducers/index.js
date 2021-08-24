
import reducScoreForPlayer1 from "./PointsCreatorForPlayer1";
import reducScoreForPlayer2 from "./PointsCreatorForPlayers2";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  
   reducScoreForPlayer1,
   reducScoreForPlayer2
   

})

export default rootReducer