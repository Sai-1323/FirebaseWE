// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPhl-4TAiGjQnmoGSyDdTuv9Qm0Dq6hlY",
  authDomain: "test-3485a.firebaseapp.com",
  databaseURL: "https://test-3485a-default-rtdb.firebaseio.com",
  projectId: "test-3485a",
  storageBucket: "test-3485a.appspot.com",
  messagingSenderId: "842497848536",
  appId: "1:842497848536:web:d51f188d9b5397f0ae13ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  set,
  ref,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
let name, rollNo, email, MobileNo, Gender, UserName;
function readDetails() {
  name = document.getElementById("name");
  rollNo = document.getElementById("rollNo");
  email = document.getElementById("email");
  MobileNo = document.getElementById("MobileNo");
  Gender = document.getElementById("Gender");
  UserName = document.getElementById("UserName");
}
let addBtn = document.getElementById("add");
let readBtn = document.getElementById("read");
let updateBtn = document.getElementById("update");
let removeBtn = document.getElementById("remove");


