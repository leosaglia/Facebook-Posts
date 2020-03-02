import React from 'react';

function Post({ name, avatar, date, content }) {
    return (
        <section className="Post">
            <img src={avatar}/>
            <h1>{name}</h1> 
            <i>{date}</i>
            <p>{content}</p>           
        </section>
    )
}

export default Post;
