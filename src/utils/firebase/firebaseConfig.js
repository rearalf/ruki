import firebase from 'firebase';
import { firebaseConfig } from './settings';
import 'firebase/auth';

const fire = !firebase.apps.length && firebase.initializeApp(firebaseConfig);
export const auth = fire.auth();
