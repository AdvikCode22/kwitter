
//ADD YOUR FIREBASE LINKS HERE
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

    username = localStorage.getItem("Name")
    document.getElementById("toWelcome").innerHTML = "Welcome, " + username

    function addRoom(){
      roomName = document.getElementById("roomName").value
      firebase.database().ref("/").child(roomName).update({
            purpose : "add room name"
      })

      localStorage.setItem("room_name" , roomName)
      window.location = "kwitter_roompage.html"
    }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log(Room_names)

            roomCont = "<div id="+Room_names+" class='room_name' onclick='redirect(this.id)'>#"+Room_names+"</div> <hr>"
            document.getElementById("output").innerHTML += roomCont
      //End code
      });});}
getData();

function redirect(name){
      localStorage.setItem("room_name" , name)
      window.location = "kwitter_roompage.html"
}

      function logout(){
            localStorage.removeItem("Name")
            localStorage.removeItem("room_name")

            window.location = "index.html"
      }