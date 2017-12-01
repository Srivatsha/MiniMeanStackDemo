const express = require('express');
const router = express.Router();

const app = express();
var mongoose = require('mongoose');  
mongoose.connect('mongodb://gamer1:gamer1@ds137121.mlab.com:37121/minigameranalytics');  

var Schema = mongoose.Schema;  


var GameSchema = new Schema({  
  Id: {  
      type: String,  
      required: true  
  },  
  UserName: {  
      type: String  
  },  
  Game: {  
   type: String  
  },  
  Level: {  
   type: String  
  },  
  StartTime: {  
   type: String  
  },  
  EndTime: {  
   type: String  
  },  
  Score: {  
   type: String  
  }      
 }, {collection:"MineGame"});  

 var userSchema = new Schema({  
  UserName: {  
      type: String  
  },  
  GameCount: {  
   type: String  
  },  
  MinScore: {  
   type: String  
  },  
  MaxScore: {  
   type: String  
  },  
  AvgScore: {  
   type: String  
  },  
  TotalScore: {  
   type: String  
  }   
 }, {collection:"MineGame"});  
 var users = mongoose.model('usersGroup', userSchema);  
 router.get('/games/:GroupBy', function(req, res) {  
  let GroupBy = req.params.GroupBy;
console.log(GroupBy);
  if(GroupBy == "UserName"){
    var userGroup = users.aggregate([
      {
        $group:{
          _id: { username : "$username"},
          GameCount: { $sum: "$game" }, 
          TotalScore: { $sum:"$score" },
          MinScore: { $min:"$score" },
          MaxScore: { $max:"$score" },
          AvgScore: { $avg:"$score" },
        }
      }
      ], function (err, userGroupData) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(userGroupData);
        return userGroupData;
    }); 
  } else{
    console.log("Not valid Groupby");
  }
  
});  

 var games = mongoose.model('gamesDashboard', GameSchema);  

 router.get('/games/:currentPage/:pageSize', function(req, res) {  
   let currentPage = parseInt(req.params.currentPage);
   let pageSize = parseInt(req.params.pageSize); 
  //  console.log(req.params);
  //  console.log(req.params.currentPage);
  //  console.log(req.params.pageSize);
   let startId = (currentPage-1)*pageSize;
   let query = {id: { $gt: startId - 1}};
  // console.log(query);
  // console.log(pageSize);
   var dsGames = games.find(query).sort({'id': 1}).limit(pageSize);  

   games.find({}).count(function(error,count){
    dsGames.find({},function(err, gamesdata){
      if (!dsGames) {  
            res.statusCode = 404;  
      
            return res.json({  
                error: 'Not found',
                TotalRows: this.totalRecCount,  
            });  
        }
        if (!err) {  
          return res.json({  
                status: 'OK',  
                TotalRows: count,
                gamesdata: gamesdata  
            }); 
          } else {  
            console.log(err);
              res.statusCode = 500;  
              //  log.error('Internal error(%d): %s',res.statusCode,err.message);  
              return res.json({  
                  error: 'Server error'  
              });  
            };
      });
    });
 });  

 



/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
module.exports = router;
