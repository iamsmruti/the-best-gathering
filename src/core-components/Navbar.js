import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import StyleIcon from '@mui/icons-material/Style';
import DialpadIcon from '@mui/icons-material/Dialpad';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import TuneIcon from '@mui/icons-material/Tune';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';

import logo from '../assets/logo.png'

const Navbar = () => {
    const [state, setState] = React.useState(false);

    const menuItems = [
        {
            title: 'Home',
            icon: <HomeIcon />,
            path: '/'
        },
        {
            title: 'Cards',
            icon: <StyleIcon />,
            path: '/cards'
        },
        {
            title: 'Buttons',
            icon: <DialpadIcon />,
            path: '/buttons'
        },
        {
            title: 'TextFields',
            icon: <TextFieldsIcon />,
            path: '/textfields'
        },
        {
            title: 'Toggle Buttons',
            icon: <ToggleOnIcon />,
            path: '/toggle-button'
        },
        {
            title: 'Sliders',
            icon: <TuneIcon />,
            path: '/slider'
        },
        {
            title: 'Icons',
            icon: <AppsIcon />,
            path: '/icons'
        }
    ]

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(!state);
    };
    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <Link style={{color: 'black', textDecoration: 'none'}} to={item.path}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );
    return (
        <>
            <AppBar sx={{ bgcolor: 'black' }}>
                <Toolbar>
                    <IconButton onClick={toggleDrawer(true)}>
                        <MenuIcon sx={{ color: 'white', fontSize: 'larger' }} />
                    </IconButton>
                    
                    <img style={{height: '50px'}} src={logo}/>

                    <IconButton href='https://github.com/iamsmruti/the-best-gathering' sx={{ ml: 'auto' }}>
                        <GitHubIcon sx={{ color: 'white', fontSize: 'larger' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor={'left'}
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list()}
            </Drawer>
        </>
    )
}

export default Navbar