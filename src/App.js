import React from 'react';
import Drawers from "./Drawers";
import clsx from 'clsx';
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import {BrowserRouter as Router, Link,  Route} from 'react-router-dom';
import Ports from './Pages/Ports'; 
import Box from '@material-ui/core/Box';
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
  function App() {
return (
    <div>
    <main>      <Routes/>
      </main>
    </div>
  );
}
export default withRouter(App);
