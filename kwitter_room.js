var firebaseConfig = {
      apiKey: "AIzaSyCkLQNBdQkGtRPhN7Wj0IYac9dSjUsc-Bo",
      authDomain: "kwitter-f482c.firebaseapp.com",
      databaseURL: "https://kwitter-f482c-default-rtdb.firebaseio.com",
      projectId: "kwitter-f482c",
      storageBucket: "kwitter-f482c.appspot.com",
      messagingSenderId: "71940492183",
      appId: "1:71940492183:web:3c1ad7b906a48bcbe052d2",
      measurementId: "G-D125E55SC9"
    };
    
  
     firebase.initializeApp(firebaseConfig);
    
      function addRoom() 
      { 
            room_name = document.getElementById("room_name").value;
             firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
       localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html"; 
      }
      user_name = localStorage.getItem("user_name");
       document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

       function getData() 
       { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
            console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row; }); }); }
       
       getData(); function redirectToRoomName(name)
        { console.log(name); 
            localStorage.setItem("room_name", name); 
            window.location = "kwitter_page.html"; }
