import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

var firebaseConfig = {
 apiKey: "AIzaSyDVRWWrGN9zYOXcXPtFbvrSbMFPmG40Gbs",
 authDomain: "image-gallery-ffe0b.firebaseapp.com",
 projectId: "image-gallery-ffe0b",
 storageBucket: "image-gallery-ffe0b.appspot.com",
 messagingSenderId: "515772768826",
 appId: "1:515772768826:web:e289eac2a563deb8480b03"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projetStorage = firebase.storage();
const projectFireStore = firebase.firestore()

export { projectFireStore, projetStorage }