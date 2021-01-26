import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import githubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING   
} from '../types';


const GithubState = (props) =>{
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    //Search users
    const searchUsers = async (text) =>{
       setLoading();
        console.log('inside of search=='+text);
        const result =  await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
        {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
        {REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
           type: SEARCH_USERS,
           payload: result.data
        
        });
       
     };

    
    const setLoading = () => dispatch({type: SET_LOADING});


    const [state, dispatch] = useReducer(githubReducer, initialState);

    return <GithubContext.Provider 
      value = {{
          users: state.users,
          user: state.user,
          repos:state.repos,
          loading: state.loading
      }}
     
   > {props.children} </GithubContext.Provider>
}

export default GithubState;