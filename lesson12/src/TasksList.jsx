import React, {Component} from 'react';
import Task from './Task'
import CreateTaskInput from './CreateTaskInput';
import {createTask, fetchTasksList, updatedTasks, deleteTask} from './tasksGateway';



class TasksList extends Component{
    state = {
        tasks: []
    }

    componentDidMount(){
        this.fetchTasks();
    }

    fetchTasks = () => {
        fetchTasksList().then(tasksList => this.setState({
            tasks: tasksList,
        }))
    }
    onCreate = text => {
        const newTask = {
            text,
            done: false,
        };

        createTask(newTask).then(()=>this.fetchTasks());
    };

    handleTaskStatusChange = id =>{
 const {done , text} = this.state.tasks.find(task => task.id === id);
 const updatedTask = {
    text,
    done: !done,
 }
 updatedTasks(id, updatedTask).then(() => this.fetchTasks());
};

    handleTaskDelete = id =>{
        deleteTask(id).then(()=>this.fetchTasks());
    };

    render(){
        const sortedList = this.state.tasks.slice().sort((a,b) => a.done - b.done);
        return(
            <main className="todo-list">
                 <CreateTaskInput onCreate={this.onCreate}/>
            <ul className="list">
                {sortedList.map(task=>(
                <Task key={task.id} {...task}
                onDelete={this.handleTaskDelete}
                onChange={this.handleTaskStatusChange}/>
                ))}
      
            </ul>
             </main>
          )
    }
   
}

export default TasksList;