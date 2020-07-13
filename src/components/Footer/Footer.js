import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CopyrightIcon from '@material-ui/icons/Copyright';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import NoteIcon from '@material-ui/icons/Note';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
    appBar: {
        // top: 'auto',
        // bottom: 0,
    },
    copyright: {
        color: '#fff',
        margin: theme.spacing(1)
    }
}))

function Footer() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar} >
                <Toolbar>
                    <Grid container justify="space-between" >
                        <List>
                            <ListItem button divider>
                                <ListItemText primary="SOCIAL MEDIA" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <FacebookIcon />
                                </ListItemIcon>
                                <ListItemText primary="FACEBOOK" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <TwitterIcon />
                                </ListItemIcon>
                                <ListItemText primary="TWITTER" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <WhatsAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="WHATSAPP" />
                            </ListItem>
                        </List>
                        <List>
                            <ListItem button divider>
                                <ListItemText primary="TODO MANAGER" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="This is a todo manager for all your daily blabla blab bla lord n savior bla blabla" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Vlad Semyonov" secondary="Developer/Designer" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <CopyrightIcon style={{color: '#fff'}}/>
                                    <Typography style={{color: '#fff'}}>2020 -</Typography> 
                                </ListItemIcon>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem button divider>
                                <ListItemText primary="NAVIGATION" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <NoteIcon />
                                </ListItemIcon>
                                <ListItemText primary="Policy" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <SearchIcon />
                                </ListItemIcon>
                                <ListItemText primary="Find Us" />
                            </ListItem>
                        </List>
                    </Grid>
                    {/* <Typography variant="h6" className={classes.title}>MyApp</Typography> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Footer;