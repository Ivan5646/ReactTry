import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class SearchBar extends React.Component { // search implement later first do the checkbox
  render () {
    return (
        <form>
          <input type="text" placeholder="Search..."/> 
          <p><input type="checkbox"/>{' '} Only incompleted tasks</p>
        </form>
      )
  }
}

class TaskRow extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.taskUnit.task}</td> {/* taskArray passed in the Table component */}
        <td>{this.props.taskUnit.completed}</td>
      </tr>
    );
  }
}

class Table extends React.Component {
  render () {
    var rows = [];
    this.props.tasks.forEach(function(taskUnit){
      rows.push(<TaskRow taskUnit={taskUnit} key={taskUnit.task}/>) // should have key property, otherwise giving warning
    });
    console.log(rows);
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class FilterableTable extends React.Component {
 render () {
   return (
      <div>
        <SearchBar/>
        <Table tasks={taskArray}/> 
      </div>
    )
  }
}

var taskArray = [{task: "read a book", completed: "false"}, {task: "go to the gym", completed: "true"}, {task: "go for a walk", completed: "false"}]; 

ReactDOM.render(
  <FilterableTable/>,
  document.getElementById('root') 
);


registerServiceWorker(); // what is it for?
