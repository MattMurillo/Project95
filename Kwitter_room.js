function addRoom()
{
     room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.getItem("room_name". room_name);

    window.location = "kwitter_room.html"
}


