import React from 'react';
import clsx from 'clsx';
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Ports from '../Pages/Ports';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import Box from '@material-ui/core/Box';

import Table from '@material-ui/core/Table';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import AddIcon from '@material-ui/icons/Add';
import Routes from '../Routing/Routes';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import ReplayIcon from '@material-ui/icons/Replay';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { fade, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import './App.css';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { green } from '@material-ui/core/colors';
import InputBase from '@material-ui/core/InputBase';
import { PinDropSharp } from '@material-ui/icons';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Countrylist from '../Countrylist';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import CloseIcon from '@material-ui/icons/Close';
const columns = [
  { id: 'cname', label: 'Group', minWidth: 150 },
  { id: 'isocode', label: 'Vessel Name', minWidth: 100 },
  {
    id: 'LMB',
    label: 'Vessel Type',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'LMO',
    label: 'Voyage Commencing',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'WR',
    label: 'Commence on',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toFixed(2),
  },

];
function createData(cname, isocode, LMB, LMO, WR) {
  // const WR = LMB / LMO;
  return { cname, isocode, LMB, LMO, WR };
}

const rows = [
  <Divider />,
  createData('- pushpp', '', '', ''),
  createData('', ' ', '', ' ', ' '),
  createData('', ' ', ' ', ' ', ' '),
  createData('', ' ', ' ', '', ' '),
  createData('', ' ', ' ', '', ' '),
  createData('', ' ', ' ', ' ', ' '),
  createData('', ' ', ' ', ' ', ' '),
  createData('', ' ', ' ', ' ', ' '),
  createData('', ' ', ' ', ' ', ' '),


];

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  Typography: {

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      backgroundColor: green,

    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  search: {
    marginRight: '-700px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.45),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.45),
    },
    marginLeft: 100,
    width: '100%',
    height: '50%',
    marginTop: 15,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      // width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(-5, 20, 1, 20),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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

const Voyagelist = (props) => {

  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const routechangess = () => {
    // let history = useHistory();

    props.history.push("/Countrylist");
  }
  const routechange = () => {
    // let history = useHistory();

    props.history.push("/Ports");
  }
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const {history}=props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Routes/> */}
      <AppBar style={{ backgroundColor: "white" }} xs={6}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          > <MenuIcon style={{ color: "red" }} />
          </IconButton>
          <Typography variant="h5" paddingRight="10px" noWrap style={{ color: "grey", display: 'inline-table' }}>
            OPERATIONS
      </Typography>
          <Box color="blue" bgcolor="background.paper" p={1} paddingRight="10px" paddingLeft="800px">
            Analytics
      </Box>
          <Box color="red" bgcolor="background.paper" p={1} >
            Documents
      </Box>
          <SupervisedUserCircleIcon style={{ color: "teal" }} />
        </Toolbar>
      </AppBar>
      <Drawer

        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}>
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
          </IconButton>
        </div>

        <List style={{ backgroundColor: "black", width: "600px" }}>

          <Button style={{ display: "grid" }}>
            <SportsGolfIcon style={{ color: "white", display: "grid", marginTop: "20px", marginRight: "8px" }}></SportsGolfIcon><Typography style={{ color: "white", fontSize: "8px" }}>Vessels</Typography>
          </Button>
          <Button style={{ display: "grid" }}>
            <SettingsEthernetIcon style={{ color: "white", display: "grid", marginTop: "20px", marginRight: "10px" }}></SettingsEthernetIcon><Typography style={{ color: "white", marginRight: "5px", fontSize: "8px" }}>Ports</Typography>

          </Button>
          <Button style={{ display: "grid" }}>
            <LocationOnIcon onClick={() => routechangess()} style={{ color: "white", display: "grid", marginTop: "20px", marginRight: "15px" }}></LocationOnIcon><Typography style={{ color: "white", fontSize: "8px" }}>Countrylist</Typography>
          </Button>
          <Button style={{ display: "grid" }}>
            <SettingsIcon onClick={() => routechange()} style={{ color: "white", display: "grid", marginTop: "20px", marginRight: "10px" }}></SettingsIcon><Typography style={{ color: "white", fontSize: "8px" }}>Portlist</Typography>
          </Button>

          <Button style={{ display: "grid" }}>
            <LockOutlinedIcon style={{ color: "white", display: "grid", marginTop: "20px", marginRight: "10px" }}></LockOutlinedIcon><Typography style={{ color: "white", fontSize: "8px" }}>Settings</Typography>
          </Button>
          <Button style={{ display: "grid" }}>
            <LocationOnIcon style={{ color: "white", display: "grid", marginTop: "10px", marginRight: "15px" }}></LocationOnIcon><Typography style={{ color: "white", fontSize: "8px" }}>Location</Typography>
          </Button>
          <Button style={{ display: "grid" }}>
            <LocationOnIcon style={{ color: "white", display: "grid", marginTop: "20px", marginRight: "15px" }}></LocationOnIcon><Typography style={{ color: "white", fontSize: "8px" }}>Location</Typography>
          </Button>


        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container style={{ backgroundColor: "lightblue", height: "50px", marginBottom: "10px" }}>
          {/* <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "space-between" }} > */}
          <Grid item xs={12} md={3} lg={3}>
            <div style={{ width: "500px", display: "flex", alignItems: "center" }}>
              <Typography style={{ marginLeft: "20px", color: "blue", marginTop: "-6px" }}>
                <h4>Voyage  List</h4>
              </Typography>

              <Button size="small" variant="outlined" color="primary" style={{ marginLeft: "10px", marginBottom: "15px", width: "150px", maginLeft: "5px", height: "30px", justifyContent: "center" }}>
                <VisibilityOffIcon style={{ display: "flex", height: "15px" }} /> <Typography style={{ fontSize: "10px" }}><h3>Copy of Default</h3></Typography>
              </Button>
              <Button size="small" variant="outlined" style={{ backgroundColor: "green", marginBottom: "18px", marginLeft: "10px", marginRight: "10px", height: "30px", display: "flex", justifyContent: "center" }}>
                <VisibilityOffIcon style={{ height: "15px" }} /><Typography style={{ fontSize: "10px" }}>My Vessel</Typography>
              </Button>
              <Button size="small" variant="outlined" style={{ display: "flex", borderColor: "blue", height: "20px", width: "10px", justifyContent: "center", marginBottom: "15px" }}>
                <AddIcon style={{ color: "blue" }} />
              </Button>


            </div>
          </Grid>

          <Grid md={3} xs={12} lg={3}>

          </Grid>

          <Grid md={3} xs={12} lg={3} style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <div marginRight="10px" className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon marginLeft="10px" />
              </div>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Grid>


          {/* <Grid md={3} xs={12} lg={3} style={{display: "flex",
    justifyContent: "center"}}>
              <ReplayIcon style={{ marginRight: "80px", paddingTop: "10px" }} />
              <CloudDownloadIcon style={{ marginLeft: "-70px", paddingTop: "10px" }} />
          </Grid> */}


          {/* </ Grid> */}
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography style={{ color: "grey" }}>Select one or more rows to enable actions.</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs={3} md={3}>
            <Box style={{ display: "flex", borderRadius: "50%" }}>
              <Box style={{ borderRadius: "50%", color: "white", display: "flex", justifyContent: "left" }}  ><Typography style={{ backgroundColor: "blue", borderRadius: "20px", paddingLeft: "10px", paddingBottom: "5px" }}>Ops Coordinator<CloseIcon style={{ paddingTop: "10px" }} /></Typography><CloseTwoToneIcon style={{ color: "white", height: "30px", width: "100px" }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs={9} md={9}>
            <TableContainer className={classes.container}>
              <Table size="medium" stickyHeader aria-label="sticky table">
                <TableHead >
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth, borderBlock: "red" }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.slice().map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.isocode}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={3} md={3}>
            {/* <div marginRight="10px" className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon marginLeft="10px" />
              </div>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */}

          </Grid>
        </Grid>
      </main>
    </div>
  );
}
export default Voyagelist;