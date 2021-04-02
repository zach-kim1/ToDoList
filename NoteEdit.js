import React, {useState} from "react";


export default function NoteEdit(props) {
    const [isEditingNote, setEditingNote] = useState(false);
  
    const[newNote,setNewNote] = useState('');
    function handleNewNote(e){
      setNewNote(e.target.value)
    }
    function handleSubmitNote(e){
      e.preventDefault();
      props.editTask(props.id, newNote);
      setNewNote("");
      setEditingNote(false);
    }
    const editingNoteTemplate = (
      <form className="stack-small" onSubmit={handleSubmitNote}>
        <div className="form-group">
          <label className="todo-label" htmlFor={props.id}>
            New note for {props.note}
          </label>
          <input 
            id={props.id} 
            className="todo-text" 
            type="text" 
            value = {newName}
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
            Delete Note <span className="visually-hidden">{props.note}</span>
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
        <li className="todo">{isEditingNote ? editingNoteTemplate : viewTemplate}</li> 
        );
      }