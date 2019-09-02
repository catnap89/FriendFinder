// ===============================================================================
// DATA
// Below data will hold all of the users.
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
// ===============================================================================

var userArray = [
  {
    name: "Daniel",
    photo: "https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_3.png",
    scores: [1,1,1,1,1,1,1,1,1,1]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userArray;


