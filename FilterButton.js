import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button  from '@material-ui/core/Button';


/*
const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) =>
    props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border:0,
  borderRadius: 100,

  color: 'white',
  height: 50,
  padding: '45 px',
  margin: 8,
});
*/
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
}));
function FilterButton(props) {
  const classes = useStyles();

  return (
    <Button 
      type="button" 
      className="btn toggle-btn" 
      aria-pressed= {props.isPressed}
      onClick={() => props.setFilter(props.name)}
      variant = "outlined"
      color = "secondary"
      size = "large"
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name} </span>
      <span className="visually-hidden"> tasks</span>
    </Button>
  );
}

export default FilterButton;