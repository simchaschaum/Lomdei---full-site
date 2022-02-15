import { db } from './firebase.js';
import { collection, doc, setDoc, getFirestore, getDoc } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

const getVideos = async () => {
    const response = await getDoc(doc(db,"website-info","platform-video-tutorials"));
    const content = response.data()
    console.log(content)
}
getVideos()

