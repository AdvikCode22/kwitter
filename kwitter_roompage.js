var firebaseConfig = {
    apiKey: "AIzaSyCHNzeS9i8XbdOY5IGwmX4yCDG9UALqSnQ",
    authDomain: "kwitter-54cf4.firebaseapp.com",
    databaseURL: "https://kwitter-54cf4-default-rtdb.firebaseio.com",
    projectId: "kwitter-54cf4",
    storageBucket: "kwitter-54cf4.appspot.com",
    messagingSenderId: "900410540758",
    appId: "1:900410540758:web:4bd26396d97eac45f4bf77",
    measurementId: "G-YR1Z1RJ39W"
  };

  firebase.initializeApp(firebaseConfig)

  user_name = localStorage.getItem("Name")
  room_name = localStorage.getItem("room_name")

  function send(){
    msg = document.getElementById("message").value

    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    })

    document.getElementById("message").innerHTML = ""
  }

  function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
    { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") { 
    
    msgID = childKey
    msgData = childData

    console.log("message id" , msgID)
    console.log("message data" , msgData)
    
    name = msgData["name"]
    message = msgData["message"]
    like = msgData["like"]

    nameTick = "<h4>"+name+" <img class='user_tick' src='tick.png'></h4>"
    messageSent = "<h4 class='message_h4'>"+message+"</h4>"
    buttonLike = "<button class='btn btn-info' id="+msgID+" value="+like+" onclick='updateLike(this.id)'>"
    buttonSpan = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button> <hr>"

    messageFull = nameTick + messageSent + buttonLike + buttonSpan

    document.getElementById("output").innerHTML += messageFull

  } }); }); } 
  getData();

  function updateLike(msg_ID){
    buttonID = msg_ID
    likes = document.getElementById(buttonID).value
    updateLikes = Number(likes)+1

    firebase.database().ref(room_name).child(msg_ID).update({
        like: updateLikes
    })
  }

  function logout(){
    localStorage.removeItem("Name")
    localStorage.removeItem("room_name")

    window.location = "index.html"
}