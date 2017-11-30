import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDz-N9cvVzXKW-NSFgxCz9hb420P_4zmU4",
    authDomain: "goalcoach-222ac.firebaseapp.com",
    databaseURL: "https://goalcoach-222ac.firebaseio.com",
    projectId: "goalcoach-222ac",
    storageBucket: "goalcoach-222ac.appspot.com",
    messagingSenderId: "813414542379"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
