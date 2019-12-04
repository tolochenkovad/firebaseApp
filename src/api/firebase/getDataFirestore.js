import { getFirestore } from "redux-firestore";

export const getDataFirestore = collect => {
  const firestoreData = getFirestore();
  return new Promise(resolve => {
    firestoreData.collection(collect).onSnapshot(resolve);
  });
};
