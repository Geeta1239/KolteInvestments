import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  increment,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBiM7dZALLlRdhACno4xZ8DZzPTzG2zb9o",
  authDomain: "kolteinvestments-65aed.firebaseapp.com",
  projectId: "kolteinvestments-65aed",
  storageBucket: "kolteinvestments-65aed.firebasestorage.app",
  messagingSenderId: "837513292078",
  appId: "1:837513292078:web:968a8a34d27f64c37432bf",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function updateVisitorCount() {
    try {

        console.log("Started");

        const visitorRef = doc(db, "stats", "visitors");

        console.log("Reading document...");

        const snap = await getDoc(visitorRef);

        console.log("Read success:", snap.exists());

        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem("lastVisit");

        if (lastVisit !== today) {

            console.log("Updating count...");

            await updateDoc(visitorRef, {
                count: increment(1)
            });

            console.log("Update success");

            localStorage.setItem("lastVisit", today);
        }

        const updatedSnap = await getDoc(visitorRef);

        document.getElementById("visitorCount").innerText =
            updatedSnap.data().count;

    } catch (error) {
        console.error("FULL ERROR:", error);
    }
}

// Call the function
updateVisitorCount();
