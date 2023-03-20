import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Navigation extends Component{
    render(){
      return (
        <div className="header">
          <h1>Video Uploader</h1>
          <nav>
            <NavLink activeClassName="active" to="/UploadForm" exact={true}>
              Contents
            </NavLink>
            <NavLink activeClassName="active" to="/table">
            </NavLink>
          </nav>
        </div>
      );
    };

    }


export default Navigation;