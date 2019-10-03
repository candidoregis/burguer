
var friends = require("../data/friends.js");

module.exports = function (app) {
    // GET FUNCTION THAT WILL RETURN THE FRIENDS LIST
    app.get("/data/friends", function (req, res) {
        return res.json(friends);
    });

    // POST FUNCTION THAT WILL BE EXECUTED WHEN THE USER CLICKS ON THE SUBMIT BUTTON
    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            friendName: "",
            friendPhoto: "",
            friendsDistancePoints: 100
        }

        var userData = req.body;
        
        var userScores = userData.userScores;

        var distancePoints = 0;

        // Go through all friends' score and returning the distance points from each question
        // then adding them and verify which one has the smaller difference and returning it
        for (var i = 0; i < friends.length-1; i++){
            distancePoints = 0;
            for(var j = 0; j < 10; j++){
                distancePoints += Math.abs( parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
            }
            if(distancePoints < bestMatch.friendsDistancePoints){
                bestMatch.friendName = friends[i].name;
                bestMatch.friendPhoto = friends[i].photo;
                bestMatch.friendsDistancePoints = distancePoints;
            }
        }
        friends.push(userData);

        res.json(bestMatch);
    });
};
