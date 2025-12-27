
// visitorCounter.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, doc, updateDoc, increment, getDoc } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBiM7dZALLlRdhACno4xZ8DZzPTzG2zb9o",
    authDomain: "kolteinvestments-65aed.firebaseapp.com",
    projectId: "kolteinvestments-65aed",
    storageBucket: "kolteinvestments-65aed.firebasestorage.app",
    messagingSenderId: "837513292078",
    appId: "1:837513292078:web:968a8a34d27f64c37432bf"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function updateVisitorCount() {
    try {
        const visitorRef = doc(db, "stats", "visitors");

        // Check if user has already been counted
        const alreadyCounted = localStorage.getItem("countedVisitor");

        if (!alreadyCounted) {
            // Increase count in Firestore
            await updateDoc(visitorRef, { count: increment(1) });

            // Mark user as counted in localStorage
            localStorage.setItem("countedVisitor", "true");
        }

        // Fetch updated count
        const snap = await getDoc(visitorRef);
        document.getElementById("visitorCount").innerText = snap.data().count;

    } catch (error) {
        console.error("Error updating visitor count:", error);
    }
}

// Call the function
updateVisitorCount();
