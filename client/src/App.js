import React, { useState } from 'react';
import './App.css';
import GroupsOfButton from './compnent/GroupsOfButton';
import {useSelector,useDispatch} from 'react-redux';
import { Alert,Button } from 'react-bootstrap';
import {zero} from './actions/ActionNames';
import Leaderboard from './compnent/Leaderboard'; 
import {Route} from 'react-router-dom';
import tennislogo from './logo/logo.png';
import {Provider} from 'react-redux'


function App()
 {
  let player1Score = useSelector((state)=>state.reducScoreForPlayer1)
  let player2Score = useSelector((state)=>state.reducScoreForPlayer2)
let   dispatchPointsForPlayer1  = useDispatch();      
   
  const [gameData,setGameData] = useState({player1Name:"",player2Name:"",winner:"",gameNumber:"Start 2nd Game",message:""})
  const [enable,setEnable] = useState({gameON:true})


     const  gamerule =  ()=>{
       
        if(enable.gameON===true){
        
          if (Math.abs(player1Score - player2Score) >= 2 && (player1Score>= 4 || player2Score >= 4)) {
            let winner_is = player1Score > player2Score ? gameData.player1Name : gameData.player2Name
                setGameData({...gameData, winner:winner_is    +",has Win the Game",message:"Best of  luck for the next time"});
                setEnable({...enable, gameON:false});

             }else if((player1Score===3  ||  player2Score===3)  &&  (player1Score===4 || player2Score===4)){
                       let AdvantageScore = player1Score===4 ? gameData.player1Name :gameData.player2Name
                       setGameData({...gameData, message: "Deuce",winner:AdvantageScore +    ",has Win the Game By AdvantagePlayer Rule"     });
                       setEnable({...enable, gameON:false});
             }
            }
           }

 

                       const reply = ()=>{

                   let check = gameData.gameNumber;

             switch(check){

              case "Start 2nd Game":
              dispatchPointsForPlayer1(zero());
              setGameData({...gameData, gameNumber:"Start 3rd Game"});
               setEnable({...enable, gameON:true});
                let Game1 ={
              playerOneName: gameData.player1Name ,
              playerTwoName: gameData.player2Name,
              playerOnegameOneScore: player1Score,
              playerTwogameOneScore: player2Score ,
             }
             fetch("/games",{
              method:"POST",
              body:JSON.stringify(Game1),
              headers:{
                "Content-type":"application/json"
              }
            }).then((response)=>response.json()).then((json)=>console.log(json));
            
            break;
             case "Start 3rd Game":
                dispatchPointsForPlayer1(zero());
                setGameData({...gameData, gameNumber:"Reply"});
                setEnable({...enable, gameON:true});
               let Game2 ={
              playerOnegameTwoScore: player1Score, 
              playerTwogameTwoScore: player2Score ,
             }
             fetch("/games2",{
              method:"POST",
              body:JSON.stringify(Game2),
              headers:{
                "Content-type":"application/json"
              }
            }).then((response)=>response.json()).then((json)=>console.log(json));
             break;
             case "Reply":
             dispatchPointsForPlayer1(zero());
             setGameData({...gameData, gameNumber:"Start 2nd Game",player1Name: "" ,player2Name:""});
             setEnable({...enable, gameON:true,disableP1:false,disableP2:false});
             let Game3 ={
              playerOnegameThirdScore: player1Score,
              playerTwogameThirdScore: player2Score ,
             }
             fetch("/games3",{
              method:"POST",
              body:JSON.stringify(Game3),
              headers:{
                "Content-type":"application/json"
              }
            }).then((response)=>response.json()).then((json)=>console.log(json));
             break;
           default:
    
           }

            }


    return(
    
<div className="game-div">
  <div className="logo"> <img className="logo" src={tennislogo}></img></div>
  <div className="title">Tennis Scoring Appliaction</div>
  <div className="sub-title">Tennis game App </div>
  
<Route exact path="/">
{
  
       enable.gameON ? (
     <div>
    <table className="center">
     <tbody>
      <tr>
      <td> 
        <div className="fields">
        <div className="username1"><svg fill="#999" viewBox="0 0 20 20"><path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path></svg><input disabled={enable.disableP1} className="user-input" type = "text" placeholder="Player Name" value={gameData.player1Name} onChange={e=>setGameData({...gameData,player1Name:e.target.value})}/></div>      
      <div className="username2"><svg fill="#999" viewBox="0 0 20 20">	<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>	</svg><input disabled={enable.disableP2} className="user-input" type = "text" placeholder="Player Name" value={gameData.player2Name} onChange={e=>setGameData({...gameData,player2Name:e.target.value})}/></div>
  </div>                             
  <button type ="button" className="add-btn" onClick={()=>setEnable({...enable,disableP1:true, disableP2:true})} >Add</button>   
      </td>
       <td>              
        
                       
      </td>
      </tr>
      </tbody>
      </table>
       <div>
            
       <table >
       <tr>
        
         <th><h1 className="player1-set">Player 1</h1></th>
       
       
       <th><h1 className="player2-set">Player 2</h1></th>                                                                                                                                                    
       </tr>
        <tr>                                                                            
        <td><p className="playerName1">{gameData.player1Name}</p></td>
        <td><p className="playerName2">{gameData.player2Name}</p></td>                                                                       
        </tr>
         <td >
        <h3 className="player1-set-score">Score  {player1Score}</h3>
         </td>
          <td>
         <h3  className="player2-set-score">Score  {player2Score} </h3>              
         </td>
         </table>                                                                           
             <GroupsOfButton/>
               {gamerule()}                           
    </div>
   
    </div>
                  
               ):(
     
             <div>
                                <Alert variant="true">
                                    <Alert.Heading>
                                <p>{gameData.winner}</p>
                                <Button onClick={reply}>{gameData.gameNumber}</Button><br></br>
                                      {gameData.message}
                                     
                                    </Alert.Heading>
                                </Alert>
                               
                            </div>
                            )
                           

               }
               <div>
               <div className="Leaderboard-link"><a  href="/leaderboard">Leaderboard</a></div>
               
               </div>

        </Route>
        
  
               
               <Route exact path="/leaderboard">
                 <Leaderboard/>
                 </Route>
                 
</div>
   )
        

          









 
}

export default App
