import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskList from '../TaskList/TaskList';
import TaskAdd from '../TaskAdd/TaskAdd';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import Accordion from '@material-ui/core/Accordion';


import AddCircleIcon from '@material-ui/icons/AddCircle';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: '500px'
        
    }
}))


function TabsComponent(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    // const { children, value, index} = props;

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    


    return (
        <div className={classes.root}>
            <Paper square>  
                <Tabs 
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                centered="true">
                    <Tab icon={<PlaylistAddCheckIcon />} label="SHOW TASKS" /> 
                    <Tab icon={<AddCircleIcon />}  label="ADD TASK" />
                </Tabs>
            </Paper>  
            {value === 0 && <TaskList />}
            {value === 1 && <TaskAdd onAddTask={(props) => setValue(props)} />}
        </div>
       
    )

}

export default TabsComponent;