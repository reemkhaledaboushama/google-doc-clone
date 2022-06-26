import { EditorStore, posts, timeout } from "./store";
import { get } from "svelte/store";
import { InitFireBase, InitFireBaseBackup } from "./firebase.service";
import { getStorage } from "firebase/storage";
import { 
  getFirestore, collection, getDocs
} from 'firebase/firestore'


export const InitEditor = (id) => {
  let editor = CodeMirror(document.getElementById(id), {
    theme: "elegant",
  });

  editor.setSize("100%", "100%");

  let dbRef = InitFireBase();
  Firepad.fromCodeMirror(dbRef, editor, {
    defaultText: "Write your document ",
    richTextToolbar: true
  });
  InitFireBaseBackup() = InitFireBase();

  EditorStore.set(editor); 
};

export const downloadCodeFromEditor = (fileName) => {
  let anchor = document.createElement("a");
  anchor.style.display = "none";

  let editor = get(EditorStore);

  anchor.setAttribute(
    "href",
    "data:text/plan;charset=utf-8," + editor.getValue()
  );
  anchor.setAttribute("download", fileName);

  document.body.appendChild(anchor);

  anchor.click();
  document.body.removeChild(anchor);
};
const fireSConfig = {
  apiKey: " AIzaSyDHCKuaBPBmJ-2guqM9tvoA3pfxFP4kyEI",
  authDomain: "https://rtc-text-editor-default-rtdb.firebaseio.com/",
  projectId: "rtc-text-editor",
  storageBucket: "gs://rtc-text-editor.appspot.com",
  messagingSenderId: "204680261755",
}

intializeApp(fireSConfig)
const storage = getStorage(intializeApp(fireSConfig))

const backup = getFirestore();
const collRef = collection(backup, 'documents')
getDocs(collRef)
.then ((snapshot) => {
  let documents = []
  snapshot.docs.forEach(() => {
    documents.push({...doc.data(), id: doc.id})
  })
  console.log(documents)
})
.catch(err => {
  console.log(err.message)
})