import React, {useState} from "react";
import Button  from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/BUttonGroup';
//import { makeStyles } from '@material-ui/core/styles';



export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  function handleChange(e){
    setNewName(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input 
          id={props.id} 
          className="todo-text" 
          type="text" 
          value = {newName}
          onChange = {handleChange}
        />
      </div>
      <div className="btn-group">
        <Button type="button" 
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </Button>
        <Button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </Button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div className="btn-group">
          <Button 
            type="button" 
            className="btn" 
            onClick={() => setEditing(true)}
            variant = "contained"
            color = "default"
          >
            Edit <span className="visually-hidden">{props.name}</span>
          </Button>
          <Button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
            variant = "contained"
            color = "secondary"
          >
            Delete <span className="visually-hidden">{props.name}</span>
          </Button>
          <Button 
            type="button" 
            className="btn" 
            variant = "contained"
            color = "default"
          >
           Add Note <span className="visually-hidden">{props.name}</span>
          </Button>
        </div>
    </div>
  );
    return (
      <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li> 
      );
    }