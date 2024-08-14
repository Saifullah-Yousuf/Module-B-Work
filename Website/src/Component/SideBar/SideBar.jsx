import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import AddIcon from '@mui/icons-material/Add';

export default function TemporaryDrawer({ open, toggleDrawer }) {
  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <div style={{border: '3px solid #7D7F7C', borderRadius: '20px' ,padding: '3px', marginTop: '20px', textAlign: 'center', width: '30%', height: '30%'
        }}>
            <AccountCircleOutlinedIcon />
            <p style={{fontSize: '9px'}}>LOGIN</p>
        </div>
        <div style={{border: '2px solid #7D7F7C', borderRadius: '20px' ,padding: '3px', marginTop: '20px', textAlign: 'center', width: '30%', height: '30%'
        }}>
            <LocalPhoneOutlinedIcon />
            <p style={{fontSize: '9px'}}>CONTACT US</p>
        </div>
        <div style={{border: '2px solid #7D7F7C', borderRadius: '20px' ,padding: '3px', marginTop: '20px', textAlign: 'center', width: '30%', height: '30%'
        }}>
            <StoreOutlinedIcon />
            <p style={{fontSize: '9px'}}>STORE</p>
        </div>
      </div>
      <List>
        {['NEW IN', 'WOMAN', 'MAN', 'KIDS', 'BEAUTY', 'ACCESSORIES', 'HOME', 'SPECIAL OFFER', 'THE EDIT', 'GET EXCLUSIVE UPDATES:'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText style={{color: '#7D7F7C'}} primary={text}/>
              <AddIcon />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  );
}
