import React from 'react'
import {Link} from "react-router-dom"

import Styles from "./Home.module.css"
function Home(props) {
  return (
    <div className={Styles.container}>
        <div>
            <p>HomePage</p>
            <div>
            <h3 className={Styles.login}>
                <Link to="/login">Login</Link>
            </h3>
            </div>
            <div>
            <h3 className={Styles.signup}>
                <Link to="/signup">Signup</Link>
            </h3>
            </div>
        
        <br/>
        <br/>


        <h2 className={Styles.welcome}>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>
    </div>

    </div>
  )
}

export default Home