import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const ROUTES = [
    'home',
    'area1',
    'area2'
]

const NavDrawer = () => {

    const [ drawerOpen, setDrawerOpen ] = React.useState(false)

    const toggleDrawer = () => setDrawerOpen(!drawerOpen)

    const TheList = () => {
        return(
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer}
                onKeyDown={toggleDrawer}
            >
                <List>
                    {ROUTES.map((route, index) => (
                        <ListItem key={route} disablePadding>
                        <ListItemButton component={Link} to={route} >
                            <ListItemText primary={route} />
                        </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            <Divider />
        </Box>
        )
    };

    return (
        <div>
            <React.Fragment key={'left'}>
                <Button onClick={toggleDrawer}>{'left'}</Button>
                <SwipeableDrawer
                anchor={'left'}
                open={drawerOpen}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                >
                    <TheList />
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}

export default NavDrawer