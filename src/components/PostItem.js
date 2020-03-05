import React from 'react';

function PostHeader({author, date}){
    return (
        <div className="postHeader">
            <img src={author.avatar} alt="img"/>
            <div className="details">
                <span>{author.name}</span>
                <span>{date}</span> 
            </div>
        </div>
    )
}

function PostComment({author, content}){
    return (
        <div className="postComment">
            <img src={author.avatar} />
            <div className="commentDetails">
                <p><span>{author.name}</span> {content}</p>
            </div>
        </div>
    )
}

function PostItem({author, date, content, comments }) {
    console.log(comments);
    return (
        <section className="post">
            <PostHeader author={author} date={date}/>
            <p>{content}</p>
            <div className="separationLine"/>
            {comments.map(comment => (
                <PostComment key={comment.id} {...comment}/>
            ))}
        </section>
    )
}

export default PostItem;
