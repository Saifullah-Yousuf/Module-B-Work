import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Collapse from '@mui/material/Collapse';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const pages = ['home', 'Payment List']; 

const dropdowns = [
  {
    label: 'Admin', 
    options: [
      { name: 'Booking', path: '/Booking/BookingList' },
      { name: 'Customer', path: '/Customer/CustomerList' },
      { name: 'Staff', path: '/Staff/StaffList' },
      { name: 'Manager', path: '/ManagerList' },
      { name: 'Payment List', path: '/paymentlist' },
    ],
  },
  {
    label: 'Manager',
    options: [
      { name: 'Login', path: '/LoginManager' },
      { name: 'Booking', path: '/Booking/BookingList' },
      { name: 'Customer', path: '/Customer/CustomerList' },
      { name: 'Staff', path: '/Staff/StaffList' },
      { name: 'Payment List', path: '/paymentlist' },
      { name: 'Manager List', path: '/ManagerList' },
    ],
  },
  {
    label: 'Staff', 
    options: [
      { name: 'Staff Form', path: '/Staff/StaffForm' },
      { name: 'Staff List', path: '/Staff/StaffList' },
    ],
  },
  {
    label: 'Booking',
    options: [
      { name: 'Booking Form', path: '/Booking/BookingForm' },
      { name: 'Booking List', path: '/Booking/BookingList' },
    ],
  },
];

const settings = ['Profile', 'Logout'];

function ResponsiveNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDropdownToggle = (label) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDropdownOptionClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const handleClickAway = () => {
    setDropdownOpen({});
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ color: 'silver' }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'flex', md: 'flex' },
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              The Hotel Management System
            </Typography>


            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  to={page === 'Home' ? '/home' : `/${page.toLowerCase().replace(' ', '')}`} 
                  sx={{ my: 2, color: 'silver', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
              {dropdowns.map((dropdown) => (
                <Box
                  key={dropdown.label}
                  sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}
                  onMouseEnter={() => handleDropdownToggle(dropdown.label)}
                  onMouseLeave={() => handleDropdownToggle(dropdown.label)}
                >
                  <Button
                    sx={{ my: 2, color: 'silver' }}
                    endIcon={<ExpandMoreIcon sx={{ color: 'silver' }} />}
                  >
                    {dropdown.label}
                  </Button>
                  <Collapse in={dropdownOpen[dropdown.label]} timeout="auto" unmountOnExit>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: 'black',
                        zIndex: 1,
                        mt: 1,
                        borderRadius: '4px',
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        width: '150px',
                      }}
                    >
                      {dropdown.options.map((option) => (
                        <MenuItem
                          key={option.name}
                          onClick={() => handleDropdownOptionClick(option.path)}
                          sx={{ color: 'silver', '&:hover': { backgroundColor: '#333' } }}
                        >
                          {option.name}
                        </MenuItem>
                      ))}
                    </Box>
                  </Collapse>
                </Box>
              ))}
            </Box>

            {/* Cart Icon - Hidden */}
            {false && ( 
              <Box sx={{ flexGrow: 0 }}>
                <IconButton component={Link} to="/cart" sx={{ color: 'silver' }}>
                  <ShoppingCartIcon />
                  <Typography variant="body2" sx={{ ml: 1, color: 'silver' }}>
                    {cartItems.length}
                  </Typography>
                </IconButton>
              </Box>
            )}

            {/* Profile Settings */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open Profile Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Profile Picture" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {setting}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Drawer for Mobile */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <Box
                sx={{ width: 250, backgroundColor: 'black', color: 'silver' }}
                role="presentation"
                onClick={handleDrawerToggle}
                onKeyDown={handleDrawerToggle}
              >
                <List>
                  {pages.map((page) => (
                    <ListItem button component={Link} to={page === 'Home' ? '/home' : `/${page.toLowerCase().replace(' ', '')}`} key={page}>
                      <ListItemText primary={page} />
                    </ListItem>
                  ))}
                  {dropdowns.map((dropdown) => (
                    <ListItem button key={dropdown.label} onClick={() => handleDropdownToggle(dropdown.label)}>
                      <ListItemText primary={dropdown.label} />
                      <ExpandMoreIcon />
                      <Collapse in={dropdownOpen[dropdown.label]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          {dropdown.options.map((option) => (
                            <ListItem button key={option.name} onClick={() => handleDropdownOptionClick(option.path)}>
                              <ListItemText primary={option.name} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>

          </Toolbar>
        </Container>
      </AppBar>
    </ClickAwayListener>
  );
}

export default ResponsiveNavbar;















