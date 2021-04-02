import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button  from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
}));

function Form(props) {
  const classes = useStyles();
  const [name, setName] = useState('');
  function handleSubmit(e) {
    if (name!==""){
      e.preventDefault();
      props.addTask(name);
      setName("")
  }
  }
  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>

      <h1 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          My To Do List
        </label>
      </h1>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value ={name}
        onChange = {handleChange} 
      />
      <Button 
        type="submit" 
        className="btn btn__primary btn__lg"
        variant = "contained"
        color = "primary"
        size ="large"
      >
        Add
      </Button>
    </form>
  );
}

export default Form;