import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Drawer from '@mui/material/Drawer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  // styling code
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  // styling code
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  // styling code
}));

const categories = {
  Students: ['StudentRegistration', 'StudentList'],
  Teachers: ['TeachersRegistration', 'TeachersList'],
  Subjects: ['SubjectAdd', 'SubjectList'],
  Syllabus: ['AddSyllabus', 'SyllabusList'],
  School: ['StudentsForm', 'TeachersForm'],
  Class: ['ClassForm', 'ClassList'],
  Admission: ['AdmissionForm'],
  Fees: ['FeeStructure', 'FeeVoucher', 'FeeSubmission'],
  Exam: ['ExamSchedule', 'ExamResult'],
  // Add other categories as needed
};

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  // styling code
}));

export default function SearchAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setDrawerOpen(newOpen);
  };

  const handleNavigation = (path, category) => {
    const fullPath = `dashboard/${category.toLowerCase()}/${path}`;
    navigate(`/${fullPath}`);
    setDrawerOpen(false);
  };

  const DrawerContent = (
    <Box sx={{ width: 250, bgcolor: '#003366', color: 'silver' }} role="presentation">
      <List>
        {Object.keys(categories).map((category) => (
          <Accordion key={category} sx={{ bgcolor: 'transparent', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: 'silver' }} />}>
              <Typography variant="body1" sx={{ color: 'silver' }}>
                {category}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List component="div" disablePadding>
                {categories[category].map((item) => (
                  <ListItem key={item} disablePadding>
                    <ListItemButton onClick={() => handleNavigation(item, category)}>
                      <ListItemText primary={item} primaryTypographyProps={{ style: { color: 'silver' } }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            LMS LEARNING MANAGEMENT SYSTEM
          </Typography>
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon style={{ color: '#C0C0C0' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
        </Toolbar>
      </AppBar>
      <CustomDrawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {DrawerContent}
      </CustomDrawer>
    </Box>
  );
}