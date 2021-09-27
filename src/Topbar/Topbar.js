import React from "react";

import classes from './Topbar.module.css'

const Topbar = () => {
    return (
        <header>
        <nav className={classes.Topbar}>
        <img alt="amazonLogo" src="https://www.beautyhunter.co.th/wp-content/uploads/2017/01/Amazon-logo-copy.png"/>
      </nav>
      </header>
    )
}

export default Topbar