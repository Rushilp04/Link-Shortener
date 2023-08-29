import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDEWfLZ1IkSHfLY5lej60ewRTQBn-hcKW4",
    authDomain: "linkshortener-dc857.firebaseapp.com",
    projectId: "linkshortener-dc857",
    storageBucket: "linkshortener-dc857.appspot.com",
    messagingSenderId: "196847623335",
    appId: "1:196847623335:web:fec6a4d83be47c1cfa0f82",
    measurementId: "G-F1F7BPFYY4"
};

initializeApp(firebaseConfig);
ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
