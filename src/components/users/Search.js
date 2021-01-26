import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state= {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }; 

    onChange = (e) =>{
      this.setState({ [e.target.name]: e.target.value});
    };

    onSubmit = (e) =>{
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('Please enter something','light');
        }else{
            console.log(this.state.text);
            this.props.searchUsers(this.state.text);
            this.setState({text: ''});
        }
        
    }
    

    render() {
       // console.log(this.props.showClear);
       const {showClear, clearUsers} = this.props;
        return (
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                   <input type="text" name="text" placeholder="Search Users...." value={this.state.text} 
                   onChange={this.onChange}/>
                   
                   <input type="Submit" value="Search" className="btn btn-dark btn-block" />
                   
                </form>
                <h1>{ showClear }</h1>
                   { showClear && 
                   <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search
