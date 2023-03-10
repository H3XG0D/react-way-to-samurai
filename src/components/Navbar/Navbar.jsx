import React from "react";
import classes from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="src/components#">Profile</a>
            </div>

            <div className={classes.item}>
                <a href="src/components#">Messages</a>
            </div>

            <div className={classes.item}>
                <a href="src/components#">News</a>
            </div>

            <div className={classes.item}>
                <a href="src/components#">Music</a>
            </div>

            <div className={classes.item}>
                <a href="src/components#">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;