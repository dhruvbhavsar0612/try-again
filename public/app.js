

// Get a reference to the Firestore database
var db = firebase.firestore();

// Get a reference to the collection you want to query
var newsRef = db.collection('news');

// Query the collection and get the data
newsRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    // doc.data() is the data for each document
    console.log(doc.data());
  });
});


// Check if a user is authenticated
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in
    
  } else {
    // User is not signed in
  }
});
