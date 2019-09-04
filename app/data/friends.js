// ===============================================================================
// DATA
// Below data will hold all of the users.
// Initially we just set it equal to a "dummy" user.
// But you could have it be an empty array as well.
// ===============================================================================

var userArray = [
  {
    name: "Emma",
    photo: "https://cdn.britannica.com/78/194178-050-7ABF2B15/Emma-Stone-La-Land-Damien-Chazelle.jpg",
    scores: [2,4,1,3,5,1,2,4,5,1]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userArray;


