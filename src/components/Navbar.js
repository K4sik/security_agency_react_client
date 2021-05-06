import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from "../actions/authAction";
import { history } from '../helpers/history';
import { connect } from 'react-redux';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        };
    
        history.listen((location) => {
        //  props.dispatch(clearMessage()); // clear message when changing location
        });
    }
    
    componentDidMount() {
        const user = this.props.user;
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }
    }
    
    logOut() {
        this.props.dispatch(logout());
    }

    render() {

        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link to="/" className="navbar-brand" >
                        Security Agency
                    </Link>
                    <div className="navbar-nav mr-auto">
                        {showAdminBoard && (
                            <div className="row">             
                                <li className="nav-item">
                                    <Link to={"/employee"} className="nav-link">
                                        Employee
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/team"} className="nav-link">
                                        Team
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/position"} className="nav-link">
                                        Position
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/client_type"} className="nav-link">
                                        Client Type
                                    </Link>
                                </li>  
                                <li className="nav-item">
                                    <Link to={"/product"} className="nav-link">
                                        Product
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/document_type"} className="nav-link">
                                        Document Type
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/status"} className="nav-link">
                                        Status
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/type_of_security"} className="nav-link">
                                        Security
                                    </Link>
                                </li>
                            </div>
                        )}
                        {showModeratorBoard && (
                            <div className="row">
                                <li className="nav-item">
                                    <Link to={"/employee"} className="nav-link">
                                        Employee
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/team"} className="nav-link">
                                        Team
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/position"} className="nav-link">
                                        Position
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/product"} className="nav-link">
                                        Product
                                    </Link>
                                </li>
                            </div>
                        )}
          
                    
          
                        {currentUser && (
                          <div className="row">
                            <li className="nav-item">
                                <Link to={"/contract"} className="nav-link">
                                    Contract
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/client"} className="nav-link">
                                    Client
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/document"} className="nav-link">
                                    Document
                                </Link>
                            </li>
                          </div>
                        
                        )}
                        </div>
          
                        {currentUser ? (
                          <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                              <Link to={"/profile"} className="nav-link">
                                {currentUser.username}
                              </Link>
                            </li>
                            <li className="nav-item">
                              <a href="/login" className="nav-link" onClick={this.logOut}>
                                LogOut
                              </a>
                            </li>
                          </div>
                        ) : (
                          <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                              <Link to={"/login"} className="nav-link">
                                Login
                              </Link>
                            </li>
          
                            <li className="nav-item">
                              <Link to={"/register"} className="nav-link">
                                Sign Up
                              </Link>
                            </li>
                          </div>
                        )}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon" />
                    </button>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }

export default connect(mapStateToProps) (Navbar);
