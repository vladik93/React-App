import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper'

const serverUrl = 'http://localhost:3000/api/tasks';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    button: {
      margin: theme.spacing(3, 0)
    }
}))


function TaskAdd(props) {
    const classes = useStyles();
    const [ title, setTitle ] = React.useState("");
    const [ content, setContent ] = React.useState("");

    const onFormSubmit = (e) => {
      e.preventDefault();
      axios.post(serverUrl, {title: title, content: content})
      .then((response) => {
        props.onAddTask(0);
      })
      .catch((error) => console.log(error));
    }

    


    return (
        <form className={classes.root} onSubmit={onFormSubmit}>
            <TextField label="Title" name="title" value={title} onChange={e => setTitle(e.target.value)} fullWidth/>
            <TextField label="Content" name="content" value={content} onChange={e => setContent(e.target.value)} fullWidth multiline rows="8" />
            <TextField id="date" label="Date" type="date" defaultValue="2017-05-14" className={classes.textField} />
            <br />
            <Button variant="contained" color="secondary" type="submit" className={classes.button} startIcon={<AddIcon />}>
              Add
            </Button>
        </form>
    )
}

export default TaskAdd;