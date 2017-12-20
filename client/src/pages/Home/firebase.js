import * as firebase from "firebase";

        // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBx-TRdttTPiVKW_8yQ0OdMDYwxt2tORNI",
      authDomain: "frameyourroom-110ed.firebaseapp.com",
      databaseURL: "https://frameyourroom-110ed.firebaseio.com",
      projectId: "frameyourroom-110ed",
      storageBucket: "frameyourroom-110ed.appspot.com",
      messagingSenderId: "313702378796"
    };
    firebase.initializeApp(config);

    const database = firebase.database();

export {database};