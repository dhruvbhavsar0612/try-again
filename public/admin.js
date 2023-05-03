// import firebase from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";

        
        // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
        import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js'
    
        // Add Firebase products that you want to use
        import { getAuth } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js'
        import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js'
        // import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
        const firebaseConfig = {
            apiKey: "AIzaSyAlV8ACPYU76j_wkUE5QbbTEIypm2_uYXw",
            authDomain: "memews-app.firebaseapp.com",
            databaseURL:
                "https://memews-app-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "memews-app",
            storageBucket: "memews-app.appspot.com",
            messagingSenderId: "164995456352",
            appId: "1:164995456352:web:a2aaf52f2afbcdd1ee5205",
            measurementId: "G-7QJB7B5RXL",
        };
        const app=initializeApp(firebaseConfig);
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";



const form=document.getElementById('meme-form')
function handleForm(event) {
  event.preventDefault();
  save();
}

form.addEventListener('submit', handleForm);

function save() {
  const title = document.getElementById("meme-title").value;
  // const image = document.getElementById("meme-image").value;
  const type = document.getElementById("meme-type").value;
  const description = document.getElementById("meme-desc").value;
  const link = document.getElementById("meme-links").value;
  console.log(title, description,link,type);
  
  set(ref(getDatabase(), 'memes/'+title), {
    title: title,
    // image: image,
    type: type,
    description: description,
    link: link,
  });
}
