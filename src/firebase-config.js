
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUHRA3fQpPXF0wPj75pp3Bgd6Tdnngx-Q",
  authDomain: "react-loginpage-7caf4.firebaseapp.com",
  projectId: "react-loginpage-7caf4",
  storageBucket: "react-loginpage-7caf4.appspot.com",
  messagingSenderId: "1079243027589",
  appId: "1:1079243027589:web:8fc198a45902f8e5ec25ec",
  measurementId: "G-KZF72FDHTB"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};