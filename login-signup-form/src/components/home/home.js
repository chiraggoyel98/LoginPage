import React from "react"
import "./home.css"
import Contact from "../contact/contact";

const Home = ({setLoginUser}) => {
    return (
       <div className="homepage">
            <h1>Welcome to our Website</h1>
            <div> Write a message to us</div>
            <Contact />
            <div className="button" onClick={() => setLoginUser({})}>Logout</div> 
       </div> 
    )
}

export default Home