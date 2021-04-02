import React, {useState} from "react";
import Button  from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/BUttonGroup';
//import { makeStyles } from '@material-ui/core/styles';



export default function Todo(props) {
  const [isEditingName, setEditingName] = useState(false);
  const [isEditingNote, setEditingNote] = useState(false);

  const [newName, setNewName] = useState('');
  const[newNote,setNewNote] = useState('');
  function handleChange(e){
    setNewName(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditingName(false);
  }
  function handleNewNote(e){
    setNewNote(e.target.value)
  }
  function handleSubmitNote(e){
    e.preventDefault();
    props.editNote(props.id, newNote);
    setNewNote("");
    setEditingNote(false);
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
          onClick={() => setEditingName(false)}
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
  const editingNoteTemplate = (
    <form className="stack-small" onSubmit={handleSubmitNote}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New note for task {props.name}
        </label>
        <input 
          id={props.id} 
          className="todo-text" 
          type="text" 
          value = {newNote}
          onChange = {handleNewNote}
        />
      </div>
      <div className="btn-group">
        <Button type="button" 
          className="btn todo-cancel"
          onClick={() => setEditingNote(false)}
        >
          Cancel
          <span className="visually-hidden">renaming {props.note}</span>
        </Button>
        <Button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new note for {props.note}</span>
        </Button>
        <Button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteNote(props.id)}
        >
          Delete <span className="visually-hidden">{props.note}</span>
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
            <ul>
              <li> Note: {props.note} </li>  
            </ul>
          </label>
        </div>
        <div className="btn-group">
          <Button 
            type="button" 
            className="btn" 
            onClick={() => setEditingName(true)}
            variant = "contained"
            color = "default"
          >
            Edit Name <span className="visually-hidden">{props.name}</span>
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
            onClick={() => setEditingNote(true)}
            variant = "contained"
            color = "default"
          >
           Edit Note <span className="visually-hidden">{props.name}</span>
          </Button>
        </div>
    </div>
  );
    return (
      <li className="todo">
      {isEditingName ? editingTemplate : viewTemplate}
      {isEditingNote ? editingNoteTemplate: isEditingNote}
      </li> 
      );
    }