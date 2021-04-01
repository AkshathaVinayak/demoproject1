import React from 'react';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SportsGolfIcon from '@material-ui/icons/SportsGolf';
import clsx from 'clsx';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';

import SettingsIcon from '@material-ui/icons/Settings';
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Ports from '../src/Pages/Ports';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Voyagelist from '../src/Pages/Voyagelist';
import Box from '@material-ui/core/Box';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Routes from './Routing/Routes';
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
import './App.css';
import { Grid } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { green } from '@material-ui/core/colors';
import InputBase from '@material-ui/core/InputBase';
import { PinDropSharp } from '@material-ui/icons';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const columns = [
  { id: 'cname', label: 'Country Name', minWidth: 170 },
  { id: 'isocode', label: 'Country\u00a0Code', minWidth: 100 },
  {
    id: 'LMB',
    label: 'Last Modified By',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'LMO',
    label: 'Lat Modified On',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'WR',
    label: 'War Risk(Y/N)',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'AMS',
    label: 'AMS (Y/N)',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'SCA',
    label: 'SCA (Y/N)',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'FRI',
    label: 'FRI(Y/N)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];
function createData(cname, isocode, LMB, LMO, WR, AMS, SCA, FRI) {
  // const WR = LMB / LMO;
  return { cname, isocode, LMB, LMO, WR, AMS, SCA, FRI };
}

const rows = [
  createData('KAZAKHSTAN', 'KZ', '', '', 'false', 'false', 'false', 'false'),
  createData('ANTARCTICA', 'AQ', '', '', 'false', 'false', 'false', 'false'),
  createData('WEST BANK', 'PS', '', '', 'false', 'false', 'false', 'false'),
  createData('PACIFIC ISLANDS', 'PW', '', '', 'false', 'false', 'false', 'false'),
  createData('ARCTIC OCEAN', 'XQ', '', '', 'false', 'false', 'false', 'false'),
  createData('UNITED STATES', 'US', '', '', 'false', 'true', 'false', 'false'),
  createData('RUSSIA', 'RU', '', '', 'false', 'false', 'false', 'false'),
  createData('EGYPT', 'EG', '', '', 'false', 'false', 'false', 'false'),
  createData('SOUTH AFRICA', 'ZA', '', '', 'false', 'false', 'false', 'false'),
  createData('GREECE', 'GR', '', '', 'false', 'false', 'false', 'false'),
  createData('NETHERLANDS', 'NL', '', '', 'false', 'false', 'false', 'false'),
  createData('BELGIUM', 'BE', '', '', 'false', 'false', 'false', 'false'),
  createData('FRANCE', 'FR', '', '', 'false', 'false', 'false', 'false'),
  createData('SPAIN', 'ES', '', '', 'false', 'false', 'false', 'false'),
  createData('HUNGARY', 'HU', '', '', 'false', 'false', 'false', 'false'),
  createData('HUNGMACEDONIA FARMERARY', 'MK', '', '', 'false', 'false', 'false', 'false'),
  createData('ITALY', 'IT', '', '', 'false', 'false', 'false', 'false'),
  createData('ROMANIA', 'RO', '', '', 'false', 'false', 'false', 'false'),
  createData('SWITGERLAND', 'CH', '', '', 'false', 'false', 'false', 'false'),
  createData('AUSTRIA', 'AT', '', '', 'false', 'false', 'false', 'false'),

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
    marginRight: '-250px',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.45),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.45),
    },
    marginLeft: 100,
    width: '100%',
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
    padding: theme.spacing(2, 20, 1, 0),
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

const Countrylist = (props) => {

  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const routechangess = () => {
    // let history = useHistory();

    props.history.push("/Voyagelist");
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
          > <MenuIcon style={{ color: "grey" }} />
          </IconButton>
          <Typography variant="h7" paddingRight="10px" noWrap style={{ color: "grey", display: 'inline-table' }}>
            DATA CENTER
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
        <List style={{ backgroundColor: "black", width: "600px", paddingRight: "30px" }}>
          <Button style={{ flexDirection: "column", display: "grid" }}><MenuBookIcon style={{ color: "white", display: "grid", marginTop: "1px", marginLeft: "10px" }}></MenuBookIcon><Typography style={{ color: "white", fontSize: "8px", marginRight: "10px" }}>AddresBook</Typography>
          </Button>
          <Button style={{ display: "grid" }}>
            <ViewAgendaIcon style={{ color: "white", display: "grid", marginLeft: "6px" }}></ViewAgendaIcon><Typography style={{ color: "white", fontSize: "8px", marginRight: "15px" }}>Cargo Names</Typography>

          </Button>
          <Button style={{ display: "grid" }}>
            <SwapHorizIcon onClick={() => routechangess()} style={{ color: "white", display: "grid", marginTop: "20px", marginLeft: "10px" }}></SwapHorizIcon><Typography style={{ color: "white", fontSize: "8px" }}>Voyagelist</Typography>
          </Button>
          <Button style={{ display: "grid" }}>
            <SettingsEthernetIcon onClick={() => routechange()} style={{ color: "white", display: "grid", marginTop: "20px", marginRight: "10px" }}></SettingsEthernetIcon><Typography style={{ color: "white", marginRight: "5px", fontSize: "8px" }}>Ports</Typography>

          </Button>

          <Button style={{ display: "grid" }}>
            <SportsGolfIcon style={{ color: "white", display: "grid", marginTop: "20px", marginRight: "8px" }}></SportsGolfIcon><Typography style={{ color: "white", fontSize: "8px" }}>Vessels</Typography>
          </Button>

          <Button style={{ display: "grid" }}>
            <SettingsIcon style={{ color: "white", display: "grid", marginTop: "20px", marginRight: "10px" }}></SettingsIcon><Typography style={{ color: "white", fontSize: "8px" }}>Security</Typography>
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
        <Grid container style={{ backgroundColor: "lightblue" }}>
          {/* <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "space-between" }} > */}
          <Grid item xs={12} md={3} lg={3}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography style={{ marginRight: "20px", marginLeft: "10px" }}>
                <h9>Country  List</h9>
              </Typography>

              <Button size="small" variant="outlined" color="primary">
                <h7> + Add View</h7>
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


          <Grid md={3} xs={12} lg={3} style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <ReplayIcon style={{ marginRight: "10px", paddingTop: "10px" }} />
            <CloudDownloadIcon style={{ marginRight: "-15px", paddingTop: "10px" }} />
          </Grid>


          {/* </ Grid> */}
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography>Drag here to set row groups</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs={9} md={9}>
            <TableContainer className={classes.container}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
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
        </Grid>
      </main>
    </div>
  );
}
export default Countrylist;