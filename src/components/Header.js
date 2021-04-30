import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({goToPage}) => {
  const classes = useStyles();
  const handlePage = (page) => {
    goToPage(page)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              LoftTaxi
            </Typography>
          </>
          <Button 
            color="inherit" 
            onClick={() => handlePage('map')}>
              Map
          </Button>
          <Button 
            color="inherit" 
            onClick={() => handlePage('profile')}>
              Profile
          </Button>
          <Button 
            color="inherit" 
            onClick={() => handlePage('login')}>
              Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;