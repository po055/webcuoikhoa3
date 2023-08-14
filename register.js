import app from "./main.js"
import Login from "./login.js"

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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

class Register {
    $formRegister
    $txtEmail
    $txtUserName
    $txtPassword
    $errorMessage
    $txtConfirmPass
    // $txtIcon
    // $txtIcon2
    // $labelEmail
    // $labelPassword
    // $txtUserName
    //2
    $txtGotoLogin
    $btnSubmit

    constructor() {
        this.$txtIcon = document.createElement("span")
        this.$txtIcon.classList.add("icon")
        this.$txtIcon.innerHTML = `<ion-icon name="mail"></ion-icon>`

        this.$txtIcon2 = document.createElement("span")
        this.$txtIcon2.classList.add("icon")
        this.$txtIcon2.innerHTML = `<ion-icon name="lock-closed"></ion-icon>`

        this.$txtIcon3 = document.createElement("span")
        this.$txtIcon3.classList.add("icon")
        this.$txtIcon3.innerHTML = `<ion-icon name="person"></ion-icon>`

        this.$txtIcon4 = document.createElement("span")
        this.$txtIcon4.classList.add("icon")
        this.$txtIcon4.innerHTML = `<ion-icon name="lock-closed"></ion-icon>`

        this.$labelEmail = document.createElement("label")
        this.$labelEmail.innerHTML = "Email"
        this.$labelEmail.for = "floatingInput"
        this.$labelEmail.classList.add("label")

        this.$labelPassword = document.createElement("label")
        this.$labelPassword.innerHTML = "Mật khẩu"
        this.$labelEmail.for = "floatingPassword"
        this.$labelPassword.classList.add("label")

        this.$labelUserName = document.createElement("label")
        this.$labelUserName.innerHTML = "Tên đăng nhập"
        this.$labelEmail.for = "floatingInput"
        this.$labelUserName.classList.add("label")

        this.$labelComfirmPass = document.createElement("label")
        this.$labelComfirmPass.innerHTML = "Xác nhận mật khẩu"
        this.$labelEmail.for = "floatingPassword"
        this.$labelComfirmPass.classList.add("label")

        this.$txtEmail = document.createElement("input")
        this.$txtEmail.type = "email"
        this.$txtEmail.classList.add("form-control")
        this.$txtEmail.id = "floatingInput"
        this.$txtEmail.placeholder="name@example.com"
        // this.$txtEmail.placeholder = "Enter your email ..."

        this.$txtUserName = document.createElement("input")
        this.$txtUserName.type = "text"
        this.$txtUserName.classList.add("form-control")
        this.$txtUserName.id = "floatingInput"
        this.$txtUserName.placeholder="Tên đăng nhập"
        // this.$txtUserName.placeholder = "Tên đăng nhập"

        this.$txtPassword = document.createElement("input")
        this.$txtPassword.type = "password"
        this.$txtPassword.classList.add("form-control")
        this.$txtPassword.id = "floatingPassword"
        this.$txtPassword.placeholder="Mật khẩu"
        // this.$txtPassword.placeholder = "Enter your pass"

        this.$txtConfirmPass = document.createElement("input")
        this.$txtConfirmPass.type = "password"
        this.$txtConfirmPass.classList.add("form-control")
        this.$txtConfirmPass.id = "floatingPassword"
        this.$txtConfirmPass.placeholder="Xác nhận mật khẩu"
        // this.$txtConfirmPass.placeholder = "Confirm your password ..."

        this.$btnSubmit = document.createElement("button")
        this.$btnSubmit.classList.add("btn")
        this.$btnSubmit.innerHTML = "Đăng ký"
        this.$btnSubmit.type = "submit"

        this.$errorMessage = document.createElement("p")
        this.$errorMessage.classList.add("error")

        this.$formRegister = document.createElement("form")

        //2
        this.$txtGotoLogin = document.createElement("a")
        this.$txtGotoLogin.innerHTML = "Đăng nhập"
        this.$txtGotoLogin.addEventListener("click", this.gotoLogin)

        this.$formRegister.addEventListener("submit", this.handleSubmit)

    }


    handleSubmit = (e) => {
        //khi có sự kiện được đẩy lên, sẽ đẩy ra một sự kiện và trình duyệt sẽ bắt nó. Tuy nhiên để ngăn cản sự mặc định, mình bắt lại sự kiện đó và ngăn chặn nó.
        e.preventDefault()
        const email = this.$txtEmail.value
        const pass = this.$txtPassword.value
        const userName = this.$txtUserName.value
        const confirmPass = this.$txtConfirmPass.value

        this.setError("")

        if (email === "") {
            this.setError("Email không được để trống!")
            return
        }
        if (pass === "") {
            this.setError("Mật khẩu không được để trống!")
            return
        }
        if (userName === "") {
            this.setError("Tên ngươi dùng không được để trông!")
            return
        }
        if (confirmPass === "") {
            this.setError("Xác nhận mật khẩu của bạn!")
            return
        }
        if (confirmPass !== pass) {
            this.setError("Mật khẩu của bạn không khớp")
            return
        }

        let myArr = [email, userName, pass, confirmPass]
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                window.location.href = "trangchu.html"
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("Error:", errorCode, errorMessage);
                alert(errorMessage)
              });
    }

    setError = (content) => {
        this.$errorMessage.innerHTML = content
        if (content !== "") {
            this.$errorMessage.style.display = "block"
        } else {
            this.$errorMessage.style.display = "none"

        }
    }

    initRender = (container) => {

        const flexContainer = document.createElement("div")

        const inputBox = document.createElement("div")
        inputBox.classList.add("form-floating")

        const inputBox2 = document.createElement("div")
        inputBox2.classList.add("form-floating")

        const inputBox3 = document.createElement("div")
        inputBox3.classList.add("form-floating")

        const inputBox4 = document.createElement("div")
        inputBox4.classList.add("form-floating")

        const logiLogin = document.createElement("p")
        logiLogin.classList.add("login-register")
        logiLogin.innerHTML = "Đã có tài khoản?"

        const title = document.createElement("h2")
        title.innerHTML = "Tạo tài khoản"
        flexContainer.classList.add("wrapper")

        flexContainer.appendChild(title)
        flexContainer.appendChild(this.$errorMessage)
        flexContainer.appendChild(inputBox)
        flexContainer.appendChild(inputBox3)
        flexContainer.appendChild(inputBox2)
        flexContainer.appendChild(inputBox4)
        flexContainer.appendChild(this.$btnSubmit)
        flexContainer.appendChild(logiLogin)

        inputBox.appendChild(this.$txtIcon)
        inputBox.appendChild(this.$txtEmail)
        inputBox.appendChild(this.$labelEmail)

        inputBox2.appendChild(this.$txtIcon2)
        inputBox2.appendChild(this.$txtPassword)
        inputBox2.appendChild(this.$labelPassword)

        inputBox3.appendChild(this.$txtIcon3)
        inputBox3.appendChild(this.$txtUserName)
        inputBox3.appendChild(this.$labelUserName)

        inputBox4.appendChild(this.$txtIcon4)
        inputBox4.appendChild(this.$txtConfirmPass)
        inputBox4.appendChild(this.$labelComfirmPass)

        logiLogin.appendChild(this.$txtGotoLogin)

        this.$formRegister.appendChild(flexContainer)
        container.appendChild(this.$formRegister)
    }

    //2
    gotoLogin = () => {
        const login = new Login()
        app.changeActiveScreen(login)
    }
}


export default Register