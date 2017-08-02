import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <h1>Hello, world! yes yes yess</h1>,
//   document.getElementById('root')
// );

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"src={props.author.avatarUrl} alt={props.author.name} />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment
    date={comment.date} // date - props.date of the Comment?
    text={comment.text} // props.text ...
    author={comment.author} />, // props.author
  document.getElementById('root')
);


registerServiceWorker();
