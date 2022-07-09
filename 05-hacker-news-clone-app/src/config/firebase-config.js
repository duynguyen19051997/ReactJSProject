import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBRjDk-7MhugIc9OudmT6-GhcdttI6DS98",
  authDomain: "react-hacker-news-3e5a6.firebaseapp.com",
  projectId: "react-hacker-news-3e5a6",
  storageBucket: "react-hacker-news-3e5a6.appspot.com",
  messagingSenderId: "441416345501",
  appId: "1:441416345501:web:80812c0aae874d41b13174",
  measurementId: "G-1PY3JY4BL3",
};

export const app = initializeApp(firebaseConfig);
