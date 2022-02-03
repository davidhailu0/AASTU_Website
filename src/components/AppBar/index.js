import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha,ThemeProvider,createTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import aastuLogo from '../../images/AASTU_LOGO.png'
import ScrollSpy from 'react-scrollspy-navigation';
import $ from 'jquery';
import './AppBar.css';

const pages = ['About_AASTU','Academics','University_Life','Research','Contact_Us'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary:{
      main:'#000'
    },
    success:{
      main:'#808080'
    }
  },
});


const ResponsiveAppBar = () => {
    const[drawer,setDrawer] = React.useState(false);
    console.log(typeof(aastuLogo));
    const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{display:'grid',justifyContent:'space-around',rowGap:"1rem"}}>
        {pages.map((text, index) => (
          <Button key={index} color='secondary' onClick={()=>{
            $('html, body').animate({
          scrollTop: $(`section[id="${text}"]`).offset().top - 50
     },1000);
      $(".animate__animated").removeClass("animate__animated");
          }}>
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  );


  return (
    <ThemeProvider theme={theme}>
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2}}
            onClick={()=>{
              $('html, body').animate({
          scrollTop: $(`div[id="home"]`).offset().top - 50
     },1000);
            }}
          >
            <img src={aastuLogo} alt='aastu_logo'/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ScrollSpy>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{
                  $('html, body').animate({
          scrollTop: $(`section[id="${page}"]`).offset().top - 50
     },1000);
      $(".animate__animated").removeClass("animate__animated");
                }}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.replace('_',' ')}
              </Button>
            ))}
            </ScrollSpy>
          </Box>
          <Box sx={{display:{xs:'none',md:'flex'}}}>
            <Search color='success'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              color='primary'
            />
          </Search>
          <Link to='/signIn' className='loginButton'>Login</Link>
          </Box>
          <Box sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}></Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
                      <Drawer
            anchor='right'
            open={drawer}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
