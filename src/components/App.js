import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import axios from 'axios';
import PrivateRoute from './PrivateRoute';
import axiosWithAuth from '../utils/axiosWithAuth';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import MyPlants from './MyPlants';
import Logout from './Logout';
import EditPlant from './EditPlant';
import AddPlant from './AddPlant';


export default App;
