import firestore from '@react-native-firebase/firestore';


export const addDoc=(path,obj)=>{
   return  firestore()
  .collection(path)
  .add(obj)
}



export const setDoc=(collectionName,path,obj)=>{
    return  firestore()
   .collection(collectionName)
   .doc(path)
   .set(obj)
}

export const getDoc=(collectionName,path)=>{
   return  firestore()
  .collection(collectionName)
  .doc(path)
  .get()
}

export const getCollection=(collectionName)=>{
   return  firestore()
  .collection(collectionName)
  .get()
}


