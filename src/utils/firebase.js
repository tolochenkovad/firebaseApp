import { firebaseApp, actionCodeSettings } from '../api/firebase';

function getFirestore() {
    return firebaseApp.firestore();
}

export function fetchCollection(collection) {
    return getFirestore().collection(collection);
}

export function getDoc(collection, docId, options) {
    return fetchCollection(collection).doc(docId).get(options);
}

export function addDoc(collection, doc) {
    return fetchCollection(collection).add(doc);
}

export function setDoc(collection, docId, doc) {
    return fetchCollection(collection).doc(docId).set(doc);
}

export function updateDoc(collection, docId, doc) {
    return fetchCollection(collection).doc(docId).update(doc);
}

export function deleteDoc(collection, docId) {
    return fetchCollection(collection).doc(docId).delete();
}

export function emailLinkLogin(email) {
    return firebaseApp.auth().sendSignInLinkToEmail(email, actionCodeSettings);
}
