/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

const CommentDetail = (props) => {

    console.log(props);

    return(

        <div className="comment">

                <div 
                        className="metadata" >

                        <span className="date">
                                {props.timeAgo}
                        </span>
                </div>


                <a 
                        href="/" 
                        className="avatar">
                        <img 
                                alt="avatar" 
                                src={props.avatar}/>
                </a>

                <div 
                        className="content">
                        <a href="/" className="author">
                                {props.author}
                        </a>
                        
                        <div className="text">
                                {props.content}
                        </div>

                </div>
                
        </div>
    );
};
export default CommentDetail;