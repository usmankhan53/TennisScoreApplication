const express = require('express');
const router = express.Router();
const GameSummary = require('../model/Score');

router.post('/games', async (req,res)=>{  

const {playerOneName,playerTwoName, playerOnegameOneScore,playerTwogameOneScore} = req.body;


try{
     
       if(playerOneName && playerTwoName ){
       
        const newGame = new GameSummary({playerOneName,playerTwoName,playerOnegameOneScore,playerTwogameOneScore});
        await newGame.save();
        res.status(201).json({message:"You are now players of Tennis Game"}); 

       }
       
       
   

}catch(err){
     console.log(err);
}

});

router.post('/games2', async (req,res)=>{  

        const { playerOnegameTwoScore,playerTwogameTwoScore} = req.body;
        
        
        try{
             
                const newGame = new GameSummary({playerOnegameTwoScore,playerTwogameTwoScore});
                await newGame.save();
                res.status(201).json({message:"Game TwoScore  added successfully"});
        }catch(err){
             console.log(err);
        }
        
        });


        router.post('/games3', async (req,res)=>{  

                const {  playerOnegameThirdScore,playerTwogameThirdScore} = req.body;
                
                
                try{
                     
                       const newGame = new GameSummary({ playerOnegameThirdScore,playerTwogameThirdScore});
                        await newGame.save();
                        res.status(201).json({message:"Game ThirdScore added successfully"});
                }catch(err){
                     console.log(err);
                }
                
                });
        
                router.get('/games', function(req, res){ 
                        GameSummary.find({}, (err, games) => { 
                            if(err) { 
                                return res.status(401).send({ 
                                    success: false,
                                    message: "Failed to get data"
                                })
                            }

                            return res.status(201).send(games);
                           
                        })
                    })
                    


      


module.exports = router;