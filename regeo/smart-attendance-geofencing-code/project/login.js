<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAkPgAR0Hs6v5oNlmxYxI2OGh-S8YA2OWJ",
    authDomain: "creativetutorial-43ba7.firebaseapp.com",
    projectId: "creativetutorial-43ba7",
    storageBucket: "creativetutorial-43ba7.appspot.com",
    messagingSenderId: "52869654198",
    appId: "1:52869654198:web:0a19740d1f26ade1066817"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app); // Get Realtime Database reference

  // Event Listener for Submit Button
  document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form refresh

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (username && email && phone) {
      // Store data in Firebase Realtime Database
      set(ref(db, "users/" + username), {
        username: username,
        email: email,
        phone: phone
      })
      .then(() => {
        alert("Login Successful! Data stored in Firebase.");
      })
      .catch((error) => {
        console.error("Error storing data:", error);
        alert("Error: " + error.message);
      });
    } else {
      alert("Please fill in all fields!");
    }
  });
</script>
