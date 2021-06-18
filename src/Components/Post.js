import React from 'react'
import './../style.scss'

function Post({username,imageURL,caption}) {
    return (
        <div className="app_posts">
            <div className="app_posts_header">
            <img alt="trolls_official's profile picture"
             data-testid="user-avatar" 
             className="avatar_image"
             draggable="false"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg">
            </img>
                <span>{username}</span>
                </div>
                <img src={imageURL}
                alt ="post_image"
                className="post_image" />
                <div className="post_caption"><strong>{username}</strong><span className="caption">{caption} </span></div>   
        </div>
    )
}

export default Post
