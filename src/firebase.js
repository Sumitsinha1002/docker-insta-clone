import firebase from "firebase";



  const firebaseApp=firebase.initializeApp(
    {
        apiKey: "AIzaSyAP5woaFLq3M-42UgBF6OoO7OaZAvcwWcQ",
        authDomain: "insta-clone-react-1c280.firebaseapp.com",
        projectId: "insta-clone-react-1c280",
        storageBucket: "insta-clone-react-1c280.appspot.com",
        messagingSenderId: "394817584249",
        appId: "1:394817584249:web:bc605785f6e25afc0aa8a8",
        measurementId: "G-65EGQX93GR"
      }

  );
  const db=firebaseApp.firestore();
  const auth= firebase.auth();
  const storage=firebase.storage();

  export {db,auth,storage};
