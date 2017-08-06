import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class TaskRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.task.task}</td> {/* should pass taskArray at some point... */}
        <td>{this.props.task.completed}</td>
      </tr>
    );
  }
}

class Table extends React.Component {
  render () {
    var rows = [];
    this.props.tasks.forEach(function(task){
      //rows.push(task.task, task.completed);
      rows.push(<TaskRow task={task}/>)
    });
    console.log(rows);
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

var taskArray = [{task: "read a book", completed: "false"}, {task: "go to the gym", completed: "true"}, {task: "go for a walk", completed: "false"}]; 

ReactDOM.render(
  <Table tasks={taskArray}/>,
  document.getElementById('root') 
);


registerServiceWorker(); // what is it for?
