import React from "react";
import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.item}>
            <img src="https://avatarfiles.alphacoders.com/242/242402.jpg" alt=""/>
            { props.message }
            <div>
                <span>Like</span>
            </div>
        </div>

    );
}

export default Post;