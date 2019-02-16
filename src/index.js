import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


const App = () => {
    return (
        <div className="ui container comments">

            <CommentDetail/>
            <CommentDetail/>
            <CommentDetail/>

        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));