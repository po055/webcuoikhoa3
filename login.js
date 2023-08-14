import app from "./main.js"
import Register from "./register.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAj6AKYAtWt5UXICtOXvIxvIfwKjOki398",
    authDomain: "web5-e27f9.firebaseapp.com",
    projectId: "web5-e27f9",
    storageBucket: "web5-e27f9.appspot.com",
    messagingSenderId: "374872063802",
    appId: "1:374872063802:web:403f732258bf73875d5a03"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

class Login{
    $txtEmail
    $txtPassword
    $formLogin
    $btnSubmit
    $txtGotoRegister
    $textRemember
    $lebelRemember
    // $txtIcon
    // $txtIcon2
    // $labelEmail
    // $labelPassword
    // $label


    constructor () {
        this.$txtIcon = document.createElement("span")
        this.$txtIcon.classList.add("icon")
        this.$txtIcon.innerHTML = `<ion-icon name="mail"></ion-icon>`

        this.$txtIcon2 = document.createElement("span")
        this.$txtIcon2.classList.add("icon")
        this.$txtIcon2.innerHTML = `<ion-icon name="lock-closed"></ion-icon>`

        this.$txtEmail = document.createElement("input")
        this.$txtEmail.type = "email"
        this.$txtEmail.classList.add("form-control")
        this.$txtEmail.id = "floatingInput"
        this.$txtEmail.placeholder="name@example.com"

        this.$labelEmail = document.createElement("label")
        this.$labelEmail.innerHTML = "Email"
        this.$labelEmail.for = "floatingInput"
        this.$labelEmail.classList.add("label")

        this.$labelPassword = document.createElement("label")
        this.$labelPassword.innerHTML = "Mật khẩu"
        this.$labelEmail.for = "floatingPassword"
        this.$labelPassword.classList.add("label")

        this.$txtPassword = document.createElement("input")
        this.$txtPassword.type = "password"
        this.$txtPassword.classList.add("form-control")
        this.$txtPassword.id = "floatingPassword"
        this.$txtPassword.placeholder="Password"

        this.$textRemember = document.createElement("input")
        this.$textRemember.classList.add("form-check-input")
        this.$textRemember.type = "checkbox"
        this.$textRemember.value = "remember-me"
        this.$textRemember.id = "flexCheckDefault"

        this.$lebelRemember = document.createElement("label")
        this.$lebelRemember.for = "flexCheckDefault"
        this.$lebelRemember.classList.add("form-check-label")
        this.$lebelRemember.innerHTML = "Remember me"

        this.$formLogin = document.createElement("form")
        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.classList.add("btn")
        this.$btnSubmit.innerHTML = "Đăng nhập"

        this.$txtGotoRegister = document.createElement("a")
        this.$txtGotoRegister.innerHTML = "Đăng ký"

        this.$txtGotoRegister.addEventListener("click", this.gotoRegister)

    }

    initRender = (container) =>{
        const flexContainer = document.createElement("div")

        const inputBox = document.createElement("div")
        inputBox.classList.add("form-floating")

        const inputBox2 = document.createElement("div")
        inputBox2.classList.add("form-floating")

        const remember = document.createElement("div")
        remember.classList.add("form-check","text-start","my-3")

        const logiRegister = document.createElement("p")
        logiRegister.classList.add("login-register")
        logiRegister.innerHTML = "Không có tài khoản?"

        const title = document.createElement("h2")
        title.innerHTML ="Đăng nhập"
        flexContainer.classList.add("wrapper")

        flexContainer.appendChild(title)
        flexContainer.appendChild(inputBox)
        flexContainer.appendChild(inputBox2)
        flexContainer.appendChild(remember)
        flexContainer.appendChild(this.$btnSubmit)
        flexContainer.appendChild(logiRegister)

        inputBox.appendChild(this.$txtIcon)
        inputBox.appendChild(this.$txtEmail)
        inputBox.appendChild(this.$labelEmail)

        inputBox2.appendChild(this.$txtIcon2)
        inputBox2.appendChild(this.$txtPassword)
        inputBox2.appendChild(this.$labelPassword)

        remember.appendChild(this.$textRemember)
        remember.appendChild(this.$lebelRemember)
        
        logiRegister.appendChild(this.$txtGotoRegister)

        this.$formLogin.appendChild(flexContainer)
        this.$formLogin.addEventListener("submit",this.login)
        container.appendChild(this.$formLogin)
    }

    //2
    gotoRegister = () => {
        const register = new Register()
        app.changeActiveScreen(register)
    }

    login =(e) => {
        e.preventDefault()
        const email = this.$txtEmail.value
        const password = this.$txtPassword.value

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Đăng nhập thành công")
            window.location.href = "trangchu.html"
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error:", errorCode, errorMessage);
            alert(errorMessage)
        });
    }
}

export default Login