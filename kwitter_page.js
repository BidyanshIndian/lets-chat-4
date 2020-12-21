// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA3iA9mWdXCGd-w1jvtPxTXM2c4WKNHL0w",
    authDomain: "kwitter-9c2fc.firebaseapp.com",
    databaseURL: "https://kwitter-9c2fc-default-rtdb.firebaseio.com",
    projectId: "kwitter-9c2fc",
    storageBucket: "kwitter-9c2fc.appspot.com",
    messagingSenderId: "87191761882",
    appId: "1:87191761882:web:1329d0c3bbe361d13986e3"
  }; 


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value ="";
}

