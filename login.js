import app from "./main.js"
import Register from "./register.js"

class Login{
    $txtEmail
    $txtPassword
    $formLogin
    $btnSubmit
    $txtGotoRegister
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

        this.$labelEmail = document.createElement("label")
        this.$labelEmail.innerHTML = "Email"
        this.$labelEmail.classList.add("label")

        this.$labelPassword = document.createElement("label")
        this.$labelPassword.innerHTML = "Mật khẩu"
        this.$labelPassword.classList.add("label")

        this.$txtPassword = document.createElement("input")
        this.$txtPassword.type = "password"

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
        inputBox.classList.add("input-box")

        const inputBox2 = document.createElement("div")
        inputBox2.classList.add("input-box")

        const inputBox3 = document.createElement("div")
        inputBox3.classList.add("input-box")

        const logiRegister = document.createElement("p")
        logiRegister.classList.add("login-register")
        logiRegister.innerHTML = "Không có tài khoản?"

        const title = document.createElement("h2")
        title.innerHTML ="Đăng nhập"
        flexContainer.classList.add("wrapper")

        flexContainer.appendChild(title)
        flexContainer.appendChild(inputBox)
        flexContainer.appendChild(inputBox2)
        flexContainer.appendChild(this.$btnSubmit)
        flexContainer.appendChild(logiRegister)

        inputBox.appendChild(this.$txtIcon)
        inputBox.appendChild(this.$txtEmail)
        inputBox.appendChild(this.$labelEmail)

        inputBox2.appendChild(this.$txtIcon2)
        inputBox2.appendChild(this.$txtPassword)
        inputBox2.appendChild(this.$labelPassword)
        
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
    }
}

export default Login