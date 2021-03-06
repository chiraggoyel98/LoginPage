import React , {useState} from "react"
import "./signup.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "" 
    })

    const updateChange = e => {
        const {name,value} = e.target

        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () => {
        const { name, email, password } = user

        if( name && email && password ){
           axios.post("http://localhost:9002/signup", user)
            .then( res => {
                alert(res.data.message)
                navigate("/login")
            })
            
        } else {
            alert("invalid input")
        }
    }

    return (
        <div className="signpage"> 

        <h1>Sign Up</h1>
        <div className="msg"></div>

        <input autoComplete="off" type="text" name="name" value={user.name} placeholder="Enter your Name" onChange={updateChange}></input>
        <input autoComplete="off" type="text" name="email" value={user.email} placeholder="Enter your Email id" onChange={updateChange}></input>
        <input  type="password" name="password" value={user.password} placeholder="Enter Password" onChange={updateChange}></input>
        
        <div className="button" onClick={register}>Sign UP</div>

        <div className="msg">Already have an account</div>
        <div className="button" onClick={() => navigate("/login")}>Login</div>
   </div> 
    )
}

export default Signup