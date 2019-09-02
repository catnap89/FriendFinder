// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source.
// The data source hold array of information on user(friends) data.
// ===============================================================================

var friendsData = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Receive user details (name, photo, scores)
    var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first user in friendsData but result will be whoever has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;
    // in this for-loop, start off with a zero difference and compare the user and the ith friendData scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friendsData.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friendsData[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friendsData[i].scores[j]);
        totalDifference += difference;
      }
      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friendsData.push(user);

    // send back to browser the best friend match
    res.json(friendsData[bestFriendIndex]);
  });


  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = 0;

    res.json({ ok: true });
  });
};
