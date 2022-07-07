import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: "" 
    })

    const updateChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        
        .then(res => {
            alert(res.data.message)

            setLoginUser(res.data.user)

            navigate("/")
        })
    }

    return (
       <div className="loginpage"> 
            <h1>Login</h1>
            <div className="msg"></div>

            <input type="text" placeholder="Email id" name="email" value={user.email} onChange={updateChange}></input>
            <input type="password" placeholder="Password" name="password" value={user.password} onChange={updateChange}></input>
            
            <div className="button" onClick={login}>Login</div>
            <div className="msg">Didn't have an account</div>
            <div className="button" onClick={() => navigate("/register")}>Sign Up</div>
       </div> 
    )
}

export default Login