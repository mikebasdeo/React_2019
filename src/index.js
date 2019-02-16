import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
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
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Mike Basdeo
                    </a>
                    <div className="metadata" >
                        <span className="date">
                            Today @ 6PM
                        </span>
                    </div>
                    <div className="text">
                        Nice Blog Post!
                    </div>

                </div>
            </div>
        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));