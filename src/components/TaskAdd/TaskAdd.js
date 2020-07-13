import React from 'react';
import axios from 'axios';
import { 
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper'
import Timer from '../Timer/Timer';

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
    const [ timeLeft, setTimeLeft ] = React.useState("");

    const onFormSubmit = (e) => {
      e.preventDefault();
      // axios.post(serverUrl, {title: title, content: content})
      // .then((response) => {
      //   props.onAddTask(0);
      // })
      // .catch((error) => console.log(error));
      console.log(timeLeft);
    }

    


    return (
        <form className={classes.root} onSubmit={onFormSubmit}>
            <TextField label="Title" name="title" value={title} onChange={e => setTitle(e.target.value)} fullWidth/>
            <TextField label="Content" name="content" value={content} onChange={e => setContent(e.target.value)} fullWidth multiline rows="8" />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker fullWidth />
              <TimePicker fullWidth />

            </MuiPickersUtilsProvider>
            {/* <TextField id="date" label="Date" type="date" defaultValue="2017-05-14" fullWidth className={classes.textField} />
            <TextField type="time"  onChange={e => setTimeLeft(e.target.value)}/> */}
            <br />
            <Button variant="contained" color="secondary" type="submit" className={classes.button} startIcon={<AddIcon />}>
              Add
            </Button>
            <Timer seconds={40000} />
        </form>

    )
}

export default TaskAdd;