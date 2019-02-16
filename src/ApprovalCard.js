/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

const ApprovalCard = (props) => {

    return (


<div className="ui cards">
  <div className="card">
    <div className="content">
      <img alt="addaltlater" className="right floated mini ui image" src={props.avatar}/>
      <div className="header">
        {props.author}
      </div>
      <div className="meta">
        {props.timeAgo}
      </div>
      <div className="description">
        {props.content}
      </div>
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>
</div>



        );
};

export default ApprovalCard;
