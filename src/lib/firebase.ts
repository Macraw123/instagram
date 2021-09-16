import {initializeApp} from 'firebase/app'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyARwJGTw3dChiSASnakobwrMwVt-uknVtg",
    authDomain: "insogram-1b259.firebaseapp.com",
    projectId: "insogram-1b259",
    storageBucket: "insogram-1b259.appspot.com",
    messagingSenderId: "171436447893",
    appId: "1:171436447893:web:6eff9b49c8650f83c0a39c"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();