import { initializeApp } from "firebase/app";
import React, {useEffect} from 'react';
import { getDatabase, ref, set, get, child } from "firebase/database";
import Index from "../views";
import Result from "../views/result";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  databaseURL: "https://react-app-261da-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


function Score() {
    
    //add a user
    function writeUserData(name, result) {
        const db = getDatabase();
        set(ref(db, 'users/' + name), {
            username: name,
            result: result
        });
    }


    writeUserData(sessionStorage.getItem('userName'), sessionStorage.getItem('result'));

    function getUserData(userId) {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
        console.error(error);
        });
    }

    getUserData(1);

    return (
       <div>Score</div>
    )
}

export default Score;



