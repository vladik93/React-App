import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const serverUrl = 'http://localhost:3000/api/tasks';

const useStyles = makeStyles((theme) => ({
    root: {
    
    },
    accordion: {
        borderRadius: '0'
    },
    deleteBtn: {
        display: 'flex',
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 'auto',
        marginRight: '1rem',
        fontSize: 40
    },
    editBtn: {
        marginLeft: 'auto',
        fontSize: 35
    }
}))


function TaskList() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [tasks, setTasks] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(serverUrl);
                setTasks(response.data);
        }
        fetchData();
    }, []);
    
    

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        console.log(event);
    }

    const onDeleteTask =  (id) => (event) => {
        event.stopPropagation();
        axios.delete(serverUrl + '/' + id)
        .then((response) => {
            const fetchData = async () => {
                const response = await axios.get(serverUrl);
                setTasks(response.data);
            }
            fetchData();
        })
    }

    

   return (
    <div className={classes.root}>
        {tasks.map((task) => {
            return (
                <Accordion expanded={expanded === task._id} className={classes.accordion} onChange={handleChange(task._id)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}  >
                        <FormControlLabel control={<Checkbox defaultValue={task._id} />} label={task.title}
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()} />
                        <DeleteForeverIcon className={classes.deleteBtn} color="secondary"  onClick={onDeleteTask(task._id)} />
                    </AccordionSummary >
                    <AccordionDetails >
                        <Typography>
                           {task.content}
                        </Typography>
                             <EditIcon className={classes.editBtn} color="primary" />
                    </AccordionDetails>
                </Accordion>
            )
        })}
        
        {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <FormControlLabel control={<Checkbox />} label="Task #2" 
                onClick={(event) => event.stopPropagation()}
                onFocus={(event) => event.stopPropagation()} />
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor nisi eu purus tristique congue. Fusce enim nisi, fringilla nec pretium at, fringilla eget quam.
                </Typography>
            </AccordionDetails>
        </Accordion> */}
    </div>
   )
}


export default TaskList;