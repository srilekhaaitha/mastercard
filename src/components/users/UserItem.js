import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const UserItem =({user: {login, avatar_url, html_url}}) => {
        return (
            <div className="card text-center">
                <img alt="" src={avatar_url} className="round-img" style={{width: '60px'}}  />
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
                
            </div>
        )
}

export default UserItem
