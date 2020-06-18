import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAiGsX3gVIEautNkDacm2Dfuad247QGQcw",
        authDomain: "kiwi-clothing.firebaseapp.com",
        databaseURL: "https://kiwi-clothing.firebaseio.com",
        projectId: "kiwi-clothing",
        storageBucket: "kiwi-clothing.appspot.com",
        messagingSenderId: "200458055405",
        appId: "1:200458055405:web:cb0521a59b66d7f2a9e6e4",
        measurementId: "G-1HJW2VZ313"
};

export const createUserProfilDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get(); 
    

    if(!snapShot.exists){
            const {displayName, email} = userAuth;
            const createdAt = new Date();

            try{
                await userRef.set({
                        displayName,
                        email,
                        createdAt,
                        ...additionalData
                })
            } catch(error){
                console.log('error creating user', error.message);
            }
    }
    return userRef;
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
