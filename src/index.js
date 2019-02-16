import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                    <CommentDetail 
                            author={faker.name.firstName() +" " + faker.name.lastName()} 
                            timeAgo={faker.date.weekday()}
                            avatar={faker.image.avatar()}
                            content={faker.lorem.paragraph()}
                    /> 
            </ApprovalCard>
            {/* <ApprovalCard
                    author={faker.name.firstName() +" " + faker.name.lastName()} 
                    timeAgo={faker.date.weekday()}
                    avatar={faker.image.avatar()}
                    content={faker.lorem.paragraph()}
            /> */}

            



        </div>

    );
};

ReactDOM.render(<App />, document.querySelector('#root'));