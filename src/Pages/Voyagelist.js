import React from 'react';
import clsx from 'clsx';
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
 import Ports from '../Pages/Ports';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
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
import CloseIcon from '@material-ui/icons/Close';
const columns = [
  { id: 'cname', label: 'Country Name', minWidth: 170 },
  { id: 'isocode', label: 'Country\u00a0Code', minWidth: 100 },
  {
    id: 'LMB',
    label: 'Last Modified By',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'LMO',
    label: 'Lat Modified On',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'WR',
    label: 'War Risk(Y/N)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'AMS',
    label: 'AMS (Y/N)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'SCA',
    label: 'SCA (Y/N)',
    minWidth: 170,
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
  createData('KAZAKHSTAN', 'KZ', '', ''),
  createData('ANTARCTICA', 'AQ', '', ''),
  createData('WEST BANK', 'PS', '', ''),
  createData('PACIFIC ISLANDS', 'PW', '', ''),
  createData('ARCTIC OCEAN', 'XQ', '', ''),
  createData('UNITED STATES', 'US', '', ''),
  createData('RUSSIA', 'RU', '', ''),
  createData('EGYPT', 'EG', '', ''),
  createData('SOUTH AFRICA', 'ZA', '', ''),
  createData('GREECE', 'GR', '', ''),
  createData('NETHERLANDS', 'NL', '', ''),
  createData('BELGIUM', 'BE', '', ''),
  createData('FRANCE', 'FR', '', ''),
  createData('SPAIN', 'ES', '', ''),
  createData('HUNGARY', 'HU', '', ''),
  createData('HUNGMACEDONIA FARMERARY', 'MK', '', ''),
  createData('ITALY', 'IT', '', ''),
  createData('ROMANIA', 'RO', '', ''),
  createData('SWITGERLAND', 'CH', '', ''),
  createData('AUSTRIA', 'AT', '', ''),

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
    marginRight: '-200px',
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

const Voyagelist = (props) => {

  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const routechanges = () => {
    // let history = useHistory();

    props.history.push("/Countrylist");
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

        <List style={{ backgroundColor: "black", justifyContent: "space-between", width: "500px" }}>


          <ContactMailIcon style={{ color: "white", display: "grid", marginBottom: "25px", marginLeft: "15px", marginTop: "20px" }}><span style={{ color: "white", display: "flex" }}><h2>Address Book</h2></span></ContactMailIcon>
          <InboxIcon style={{ color: "white", display: "grid", marginBottom: "5px", marginLeft: "20px" }}></InboxIcon>
          <InboxIcon style={{ color: "white", display: "grid", marginBottom: "25px", marginLeft: "20px" }}></InboxIcon>
          <InboxIcon onClick={() => routechanges()} style={{ color: "white", display: "grid", marginBottom: "35px", marginLeft: "20px" }}></InboxIcon>

          <InboxIcon style={{ color: "white", display: "grid", marginBottom: "25px", marginLeft: "20px" }}></InboxIcon>

          <InboxIcon style={{ color: "white", display: "grid", marginBottom: "25px", marginLeft: "20px" }}></InboxIcon>


          <InboxIcon style={{ color: "white", display: "grid", marginBottom: "25px", marginLeft: "20px" }}></InboxIcon>
          <LockOutlinedIcon style={{ color: "white", display: "grid", marginBottom: "35px", marginLeft: "20px" }}></LockOutlinedIcon>


          <InboxIcon style={{ color: "white", display: "grid", marginBottom: "25px", marginLeft: "20px" }}></InboxIcon>

          <InboxIcon style={{ color: "white", display: "grid", marginBottom: "25px", marginLeft: "20px" }}></InboxIcon>

        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container style={{ backgroundColor: "lightblue" }}>
          {/* <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "space-between" }} > */}
          <Grid item xs={12} md={3} lg={3}>
            <div style={{ width:"500px", display: "flex", alignItems: "center", justifyContent:"space-between" }}>
              <Typography style={{ marginLeft: "20px"}}>
                <h9>Voyage  List</h9>
              </Typography>

              <Button size="small" variant="outlined" color="primary" style={{width:"100px"}}>
                <VisibilityOffIcon style={{display:"flex", height:"10px"}}/> <Typography style={{ fontSize:"10px"}}>Copy of Default</Typography>
              </Button>
              <Button size="small" variant="outlined" style={{backgroundColor:"green", marginLeft:"5px", marginRight:"5px",  height:"30px",  display:"flex", justifyContent:"center"}}>
                <VisibilityOffIcon style={{height:"20px"}}/><Typography style={{fontSize:"10px"}}>My Vessel</Typography>
              </Button>
              <Button size="small" variant="outlined" style={{display:"flex", justifyContent:"center"}}>
             <AddIcon />
              </Button>

            </div>
          </Grid>

          <Grid md={3} xs={12} lg={3}>

          </Grid>

          <Grid md={3} xs={12} lg={3} style={{display: "flex",
    justifyContent: "center"}}>
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


          <Grid md={3} xs={12} lg={3} style={{display: "flex",
    justifyContent: "center"}}>
              <ReplayIcon style={{ marginRight: "10px", paddingTop: "10px" }} />
              <CloudDownloadIcon style={{ marginRight: "10px", paddingTop: "10px" }} />
          </Grid>


          {/* </ Grid> */}
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>
            <Typography>Select one or more rows to enable actions.</Typography>
          </Grid>
          <Divider />
        </Grid>
        <Grid container>
          <Grid item xs={12} md={12}>;
            <Typography style={{backgroundColor:"blue"}}>Ops Coordinator<CloseIcon style={{padding:"10px"}}/></Typography>
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
export default Voyagelist;