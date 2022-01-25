import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import aastulogo from '../../images/AASTU_LOGO.png';
import Drawer from '@mui/material/Drawer';
import InputBase from '@mui/material/InputBase';
import {Link} from 'react-router-dom';
import List from '@mui/material/List';
import SearchIcon from '@mui/icons-material/Search';
import {styled, alpha,createTheme,ThemeProvider} from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AppBar.css';

const pages = ['About AASTU',"Admissions","Academics","University Life","Research"]
const ResponsiveAppBar = (props) => {
  const [state, setstate] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setstate(open);
  };
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
        {pages.map((text) => (
           <Accordion key={text}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography color={'GrayText'}>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color={'darkgray'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        ))}
      </List>
    </Box>
  );
  const customTheme = createTheme({
    palette:{
      secondary:{
        main:'#ffffff'
      }
    }
  });
  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  return (
    <ThemeProvider theme={customTheme} >
    <AppBar position="fixed">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 0 }}>
            <img src={aastulogo} alt='logo' height={'70'}/>
         </Box>
         <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} paddingTop={"5px"} className='btnContainer'>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>{

                }}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>

            ))}
          </Box>
          <Box sx={{display:{xs:'none',md:'flex'}}}>
                <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Link to={'/login'} className={'link'} sx={{color:'white'}}>Login</Link>
          </Box>
          <Box sx={{flexGrow:1,display:{xs:'flex',md:'none'}}}></Box>
          <Box sx={{display:{xs:'flex',md:'none'}}}>
              <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color='secondary'
            >
              <MenuIcon />
            </IconButton>
            <Drawer
            anchor={'right'}
            open={state}
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