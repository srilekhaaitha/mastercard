import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavBar = (props) => {

    // static defaultProps = {
    //   title: 'Github Finder',
    //   icon: 'fab fa-github'
    // };

    // static propTypes= {
    //     title: PropTypes.string.isRequired,
    //     icon: PropTypes.string
    // };

   // render() {
        return (
            <div className='navbar bg-primary'>
                <h1>
                  <i className={props.icon}></i> {props.title}
                </h1>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li><Link to="/about" >About </Link>  </li>
                </ul>
              
            </div>
        )
   // }
}

NavBar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  NavBar.propTypes= {
      title: PropTypes.string.isRequired,
      icon: PropTypes.string
  };

export default NavBar
