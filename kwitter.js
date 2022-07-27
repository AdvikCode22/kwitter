function saveUser(){
    user = document.getElementById("username").value
    localStorage.setItem("Name" , user)
    window.location = "kwitter_room.html"
}