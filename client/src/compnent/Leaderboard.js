import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import './Leaderboard.css';

function Leaderboard() {

  

    const [playerData ,setPlayerData] = useState([]);
 
 const gameLeaderBoard = async ()=>{
   try{
 const res =  await fetch('/games',{
   method:"GET",
   headers: {
     Accept:"application/json",
     "Content-Type": "application/json"
   },
   credentials : "include"
 });
const   data = await res.json();
  
 console.log(data);

setPlayerData(data);
 
 
 
 
 
 
 
   }catch(err){
 console.error(err);

   }
 }

 useEffect(()=>{
 gameLeaderBoard();
 },[]); 






return(
  <div>

<h2 className="header-leaderboard">Tennis Score  Leaderboard</h2>
<tr ><th className="table-head">Name </th><th className="table-head">1stGameScore</th><th className="table-head">2ndGameScore</th><th className="table-head">3rdGameScore</th> </tr>

{
  
    
 
playerData.map((data)=>{
  return(
    <div className="table-content">
   <div className="p1N"> {data.playerOneName} </div>
   <div className="p1S1"> {data.playerOnegameOneScore} </div>
   <div className="p1S2"> {data.playerOnegameTwoScore} </div>
   <div className="p1S3"> {data.playerOnegameThirdScore} </div>

   </div>
  )
})
    
  
}

{
  
    
 
  playerData.map((data)=>{
    return(
      <div className="table-content">
     <div className="p1N"> {data.playerTwoName} </div>
     <div className="p1S1"> {data.playerTwogameOneScore} </div>
     <div className="p1S2"> {data.playerTwogameTwoScore} </div>
     <div className="p1S3"> {data.playerTwogameThirdScore} </div>
  
     </div>
    )
  })
      
    
  }
  
  


 
    
  </div>
)
       

}
export default Leaderboard
 /* <tr>{elem.playerTwoName}
          <td className="ok">{elem.playerTwogameOneScore}</td>
          <td className="ok1">{elem.playerTwogameTwoScore}</td>
          <td className="ok3">{elem.playerTwogameThirdScore}</td>
            </tr>*/
          