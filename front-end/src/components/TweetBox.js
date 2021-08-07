import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import '../css/TweetBox.css';
function TweetBox() {
    return (
        <div className="TweetBox">
            <div className="TweetBox-title">
                <h3>Home</h3>
            </div>
            <div className="TweetBox-box">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <input type="text" placeholder="what's happening?" ></input>
            </div>
            <div className="Tweet-fileupload">
                <div className="File">
                    <label>File upload</label>
                    <input type="file" id="" />
                </div>
                <div className="Tweet-button">
                    <button>TWEET</button>
                </div>
            </div>
        </div>
    )
}

export default TweetBox
