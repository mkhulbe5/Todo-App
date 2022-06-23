import React, { Component } from 'react'


class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{ task: "Check Mails", id: 1 }, { task: "Read documentation", id: 2 }, { task: "Follow up LinkedIn", id: 3 }],
            currentTask: ''
        }
    }
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            currentTask: e.target.value
        })
    }

    handleSubmit = (e) =>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currentTask,id:this.state.tasks.length + 1}],
            currentTask:''
        })
    }

    handleDelete = (id)=>{

        let narr = this.state.tasks.filter((taskObj)=>{
                return taskObj.id!= id
        })
        this.setState({
            tasks:[...narr]
        })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.currentTask}></input>
                <button onClick={this.handleSubmit}>Submit</button>
                <ul>
                    {
                        this.state.tasks.map(function(taskObj){
                            return(
                            <li key={taskObj.id}>
                                <p>{taskObj.task}</p>
                                <button onClick= { () =>this.handleDelete(taskObj.id)}>Delete</button>
                            </li>
                        )
                    }.bind(this)
                    )
                    }
                </ul>
            </div>
        )
    }
}


export default Todo;
