import { getFirestore } from "redux-firestore";

export const getShapShot = collect => {
  return new Promise(resolve => {
    getFirestore()
      .collection(collect)
      .onSnapshot(resolve);
  });
};

export const fetchCollection = snapShot => {
  return snapShot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id,
  }));
};

export const addDoc = (collection, doc) => {
  return getFirestore()
    .collection(collection)
    .add(doc);
};

export const deleteDoc = (collection, docId) => {
  return getFirestore()
    .collection(collection)
    .doc(docId)
    .delete();
};
