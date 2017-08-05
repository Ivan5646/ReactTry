import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class TaskRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{JSON.stringify(this.props.tasks)}</td> {/* should pass taskArray at some point... */}
        <td>table cell</td>
      </tr>
    );
  }
}

// class Table extends React.Component {
//   render () {
//     return (
//       <table>
        
//       </table>
//     );
//   }
// }

var taskArray = [{task: "read a book", completed: "false"}, {task: "go to the gym", true: "false"}, {task: "go for a walk", completed: "false"}]; 

ReactDOM.render(
  <TaskRow tasks={taskArray}/>,
  document.getElementById('root') // changed to root
);


registerServiceWorker(); // what is it for?
