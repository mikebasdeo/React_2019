import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">

            <CommentDetail 
                    author={faker.name.firstName() +" " + faker.name.lastName()} 
                    timeAgo={faker.date.weekday()}
                    avatar={faker.image.avatar()}
                    blogPost={faker.lorem.paragraph()}
            />

            <CommentDetail 
                    author={faker.name.firstName() +" " + faker.name.lastName()} 
                    timeAgo={faker.date.weekday()}
                    avatar={faker.image.avatar()}
                    blogPost={faker.lorem.paragraph()}
            />

            <CommentDetail 
                    author={faker.name.firstName() +" " + faker.name.lastName()} 
                    timeAgo={faker.date.weekday()}
                    avatar={faker.image.avatar()}
                    blogPost={faker.lorem.paragraph()}
            />

        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));