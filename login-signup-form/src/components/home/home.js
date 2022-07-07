<<<<<<< HEAD
import React from "react"
import "./home.css"

const Home = ({setLoginUser}) => {
    return (
       <div className="homepage">
            <h1>Home Page</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div> 
       </div> 
    )
}

=======
import React from "react"
import "./home.css"

const Home = ({setLoginUser}) => {
    return (
       <div className="homepage">
            <h1>Home Page</h1>
            <div className="button" onClick={() => setLoginUser({})}>Logout</div> 
       </div> 
    )
}

>>>>>>> 299e4fe436b952f1cbc8058c4c7f0ecbd5fec514
export default Home