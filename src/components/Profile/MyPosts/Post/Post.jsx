import React from "react";
import classes from './MyPosts.module.css';

function MyPosts() {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    <img src="https://avatarfiles.alphacoders.com/242/242402.jpg" alt=""/>
                    post 1
                </div>
                <div className={classes.item}>
                    post 2
                </div>
                <div className={classes.item}>
                    post 3
                </div>
                <div className={classes.item}>
                    post 4
                </div>
                <div className={classes.item}>
                    post 5
                </div>
            </div>
        </div>
    );
}

export default MyPosts;