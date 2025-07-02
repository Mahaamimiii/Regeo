// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkPgAR0Hs6v5oNlmxYxI2OGh-S8YA2OWU",
    authDomain: "creativetutorial-43ba7.firebaseapp.com",
    projectId: "creativetutorial-43ba7",
    storageBucket: "creativetutorial-43ba7.appspot.com",
    messagingSenderId: "52869654198",
    appId: "1:52869654198:web:0a19740d1f26ade1066817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save user data
async function saveUserData(username, email, phone) {
    try {
        await addDoc(collection(db, "users"), {
            username: username,
            email: email,
            phone: phone,
            timestamp: new Date()
        });
        alert("Login Successful! Data saved in Firestore.");
    } catch (error) {
        console.error("Error saving data:", error);
        alert("Error: " + error.message);
    }
}

// Event Listener for form submission
document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (username && email && phone) {
        saveUserData(username, email, phone);
    } else {
        alert("Please fill out all fields!");
    }
});
