import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class TaskRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.tasks.task}</td> {/* should pass taskArray at some point... */}
        <td>{this.props.tasks.completed}</td>
      </tr>
    );
  }
}

class Table extends React.Component {
  render () {
    return (
      <table>
        
      </table>
    );
  }
}


ReactDOM.render(
  <TaskRow tasks={taskArray} />,
  document.getElementById('root') // changed to root
);


var taskArray = [{task: "read a book", completed: "false"}, {task: "go to the gym", true: "false"}, {task: "go for a walk", completed: "false"}]; 

registerServiceWorker(); // what is it for?
