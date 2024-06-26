import { initializeApp } from "firebase/app";
import React, {useEffect, useState} from 'react';
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

    const [score, setScore] = useState();
    
    //add a user
    function writeUserData(name, result) {
        const db = getDatabase();
        set(ref(db, 'users/' + name), {
            username: name,
            result: result
        });
    }

    useEffect(() => {
        writeUserData(sessionStorage.getItem('userName'), sessionStorage.getItem('result'));
        getUserData();
    },[])
    
    //get data
    function getUserData() {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/`))
        .then((snapshot) => {
            if (snapshot.exists()) {
                setScore(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
        console.error(error);
        });
    }

    return (
        <>
            <div className="mt-6 mb-2 w-full h-auto rounded-xl bg-gradient-to-r from-purple-400 to-blue-500 mt-12
            hover:from-blue-500 hover:to-purple-400 ease-in-out transition-all duration-100
            sm:w-3/5">
                <div className='text-xl font-mono flex justify-center items-center'>Score Table</div>
            </div>
                { score && Object.keys(score).map(name => (
                <div key={name} className='pt-2 text-xl font-mono flex justify-center items-center'>
                    {name} - {score[name].result}
                </div>
                ))
                }
        </>
        )
    }


export default Score;



