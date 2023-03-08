// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChEKJsND5QYhE5wCBobd1S4gX3FceHbPM",
  authDomain: "temp-308d4.firebaseapp.com",
  databaseURL: "https://temp-308d4-default-rtdb.firebaseio.com",
  projectId: "temp-308d4",
  storageBucket: "temp-308d4.appspot.com",
  messagingSenderId: "618333847382",
  appId: "1:618333847382:web:0807881db264dec23ba0f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  set,
  ref,
  get,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
const db = getDatabase();
let name, rollNo, email, MobileNo, Gender, UserName;
function readDetails() {
  name = document.getElementById("name");
  rollNo = document.getElementById("rollNo");
  email = document.getElementById("email");
  MobileNo = document.getElementById("MobileNo");
  UserName = document.getElementById("UserName");
  Gender = document.getElementById("Gender");
}
let addBtn = document.getElementById("add");
let readBtn = document.getElementById("read");
let updateBtn = document.getElementById("update");
let removeBtn = document.getElementById("remove");
let d = document.getElementById("myDetails");
function addUser() {
  readDetails();
  set(ref(db, "users/" + rollNo.value), {
    name: name.value,
    uid: rollNo.value,
    gender: Gender.value,
    email: email.value,
    mobileNo: MobileNo.value,
    username: UserName.value
  })
    .then(() => {
      alert("Data Inserted!!");
    })
    .catch((err) => {
      alert(err);
    });
  }
  function readUsers() {
    var tab = document.getElementById("details");
    get(child(ref(db), "users"))
    .then((snapshot) => {
      let arr = Object.values(snapshot.val());
      //d.innerHTML += "<table>"
      arr.forEach((ele) => {
        tab.innerHTML+="<tr><td>"+ele.uid+"</td><td>"+ele.name+"</td><td>"+ele.email+"</td><td>"+ele.mobileNo+"</td><td>"+ele.username+"</td></tr>";
        console.log(ele);
      });
      //d.innerHTML += "</table>"
    })
    .catch((err) => {
      alert(err);
    });
  }
  addBtn.addEventListener("click", addUser);
  readBtn.addEventListener("click", readUsers);
  