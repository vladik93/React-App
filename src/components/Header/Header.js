import './Header.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles} from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/hidden';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import AccountBox from '@material-ui/icons/AccountBox';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InfoIcon from '@material-ui/icons/Info';
import ListItemText from '@material-ui/core/ListItemText';
 
const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
    },
    searchIcon: {
        flexGrow: 0,
        padding: theme.spacing(0, 2)
    },
    searchInput: {
        // margin: theme.spacing(0, 2),
        // backgroundColor: '#fff'
    }
}))


function Header(props) {
        const classes = useStyles();
        const { window } = props;
        // const { width } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);

        const handleDrawerToggle = () => {
            setMobileOpen(!mobileOpen);
        };

        const container = window !== undefined ? () => window().document.body : undefined;
        
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appbar}>
                    {/* <Grid container>  */}
                        <Toolbar className={classes.toolbar}>
                            <Hidden mdUp>
                                <IconButton edge="start" className={classes.menuButton} onClick={handleDrawerToggle}> 
                                    <MenuIcon />
                                </IconButton>
                            </Hidden>
                            <Typography variant="h6" className={classes.title}>MyApp</Typography>
                            <SearchIcon  className={classes.searchIcon}/>
                            <InputBase placeholder="Search..." className={classes.searchInput} />
                            <Hidden smDown>
                                <Button color="inherit">Register</Button>
                                <Button color="inherit" id="login-btn">Login</Button>
                            </Hidden>
                        </Toolbar>
                    {/* </Grid>    */}
                </AppBar>
                <Hidden mdUp>
                    <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} container={container}>
                        <List>
                            <ListItem button>
                                <ListItemIcon>
                                    <AccountBox />
                                </ListItemIcon>
                                <ListItemText primary="Login"></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PersonAddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Register"></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary="About"></ListItemText>
                            </ListItem>
                        </List>
                    </Drawer>
                </Hidden>
            </div>
        )
}

export default Header;