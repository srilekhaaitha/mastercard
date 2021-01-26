import './App.css';
import React, {Fragment,Component} from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

class App extends Component{
   constructor(){
      super();
      this.state={loading:false,users:[], alert:null, user:{}}
   }
  
   searchUsers = async (text) =>{
      this.setState({loading:true});
    //  console.log('inside of search=='+text);
      const result =  await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({loading:false, users: result.data.items});
      console.log('inside of search=='+this.state.users.length);
   };

   getUser = async (username) =>{
      this.setState({loading:true});
     // console.log('inside of getUser=='+username);
      const result =  await axios.get(`https://api.github.com/users/${username}?client_id=$
      {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
      {REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({loading:false, user: result.data});
      console.log('inside of search=='+this.state.users.length);
   };

   clearUsers = () => this.setState({users: [], loading: false});

   setAlert = (msg, type) => {
      this.setState({alert: {msg, type}});
      setTimeout(()=> this.setState({alert: null}), 5000);
   }

  render(){
     const {users,user,loading} = this.state;
     return (
        <GithubState>
        <Router>
        <div className="App">
           <NavBar />
           <div className="container">
              <Alert alert={this.state.alert} />
              <Switch>
                 <Route exact path='/'  render={props =>(
                    <Fragment>
                     
                     <Search searchUsers={this.searchUsers}  clearUsers={this.clearUsers}
                      showClear = {users.length >0 ? true : false}
                      setAlert={this.setAlert}/>
                     <Users loading={loading} users={users} /> 

                   </Fragment>
                 )
                 }  />
                 <Route exact path='/about' component={About}  />
                 <Route exact path='/user/:login' render={props=>(
                    <User {...props}  getUser={this.getUser} user={user} loading={loading}/>
                 )
                 }
                 />
              </Switch>
                
           </div>
        </div>
        </Router>
        </GithubState>
      );
  }
}

export default App;
